const Vue = window.Vue;
const VeeValidate = window.VeeValidate;

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  data: function () {
    return {
      firstName: '',
      lastName: '',
      emailAddress: '',
      mobilePhone: '',
      company: '',
      registeredCompanyNumber: '',
      billingAccountNumber: '',
      licenceNumber: '',
      basket: [],
      stepVisible: 1,
      idForDelete: '',
      editionForDelete: '',
      isButtonDisabled: false,
      licenceOptions: [
        '1-9',
        '10-150',
        '150+'
      ],
      isMicrosoft: false,
      haveTenantName: '',
      tenantOriginal: '',
      tenantGenerated: '',
      tenantGeneratedSecondary: '',
      isOffice365: false,
      preparedForSend: [],
      haveEmptyFields: true
    }
  },
  methods: {
    reviewOrder: function () {
      this.stepVisible = 2;

      this.$validator.validateAll().then((result) => {
        if (result) {
          this.stepVisible = 2;
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          return;
        }

        alert('Please correct all the errors and try again!');
        this.stepVisible = 1;
      });

    },
    submitOrder: function () {

      var commaify = this.preparedForSend.join(',');
      var basketField = document.getElementById('basket');

      basketField.value = commaify;
      var form = document.getElementById('form-client-values');

      form.submit();

      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      localStorage.removeItem('basket');
      this.stepVisible = 3;

    },
    editOrder: function () {
      this.stepVisible = 1;
    },
    continueShopping: function () {
      window.history.back();
    },
    openDialog: function (id, editionName) {
      var dialog = document.getElementById('confirmation-dialog');
      dialog.classList.add('dialog--display');
      this.idForDelete = id;
      this.editionForDelete = editionName;
    },

    cartIsEmpty: function () {
      var pageTitle = document.getElementById('page-title');

      if (itemsInBasket.length < 1) {
        this.stepVisible = 4;
        pageTitle.innerText = 'Your cart is empty!';
      }
    },
    checkFieldsValue: function () {
      if (this.errors.any()) {
        this.isButtonDisabled = false;
      }
    },
    fillBasket: function () {
      var itemsFromLocalStorage = JSON.parse(localStorage.getItem('basket')) || [];

      this.basket = itemsFromLocalStorage;
    },
    removeItemFromCart: function () {
      var idForDelete = this.idForDelete;
      var editionNameForDelete = this.editionForDelete;

      var dialog = document.getElementById('confirmation-dialog');
      dialog.classList.remove('dialog--display');

      var itemsInBasket = JSON.parse(localStorage.getItem('basket'));

      for (var i = 0; i < itemsInBasket.length; i++) {
        if (itemsInBasket[i].id == this.idForDelete && itemsInBasket[i].editionName == this.editionForDelete) {
          itemsInBasket.splice(i, 1);
          break;
        }
      }

      for (var j = 0; j < this.basket.length; j++) {
        if (this.basket[j].id == this.idForDelete && this.basket[j].editionName == this.editionForDelete) {
          this.basket.splice(j, 1);
          break;
        }
      }

      localStorage.setItem("basket", JSON.stringify(itemsInBasket));

      this.removeFromCart(idForDelete, editionNameForDelete);

      let cartOnHeader = document.getElementById('cart-on-header');
      if (itemsInBasket.length < 1) {
        cartOnHeader.classList.add('hide');
      } else {
        cartOnHeader.innerText = itemsInBasket.length;
      }
    },
    removeFromCart: function (id, editionName) {
      var itemsInBasket = JSON.parse(localStorage.getItem('basket'));

      for (var i = 0; i < itemsInBasket.length; i++) {
        if (itemsInBasket[i].id == id) {
          if (itemsInBasket[i].id == id && itemsInBasket[i].editionName == editionName) {
            itemsInBasket.splice(i, 1);
            break;
          }
        }

        localStorage.setItem("basket", JSON.stringify(itemsInBasket));
        window.location.reload();

      }

      var itemsForEloqua = localStorage.getItem('itemsForEloqua') || [];
    },
    getItemsFromLocalStorage: function () {
      var itemsInBasket = JSON.parse(localStorage.getItem('basket')) || [];
      var itemsArray = [];

      for (var i = 0; i < itemsInBasket.length; i++) {


        var item = {
          id: itemsInBasket[i].id,
          title: itemsInBasket[i].title,
          editionName: itemsInBasket[i].editionName,
          description: itemsInBasket[i].description,
          image: itemsInBasket[i].image,
          editionPrice: itemsInBasket[i].editionPrice,
          licenceNumber: ''
        };

        itemsArray.push(item);

        if (item.title.indexOf("Microsoft") > -1 || item.title.indexOf("Office 365") > -1) {
          this.isMicrosoft = true;
        }

        if (item.title.indexOf("Office 365") > -1) {
          this.isOffice365 = true;
        }
      }

      this.basket = itemsArray;

    },
    setLicenceNumber: function (event, item) {
      item.licenceNumber = event.target.value;
    },
    generateTenantName: function () {
      if (this.company != '') {
        this.tenantGenerated = this.company.replace(/\s/g, "");
        this.tenantGeneratedSecondary = this.company.replace(/\s/g, "") + '365';
      }
    },
    colonifyItem: function (item) {
      return item.title + ":" + item.editionName + ":" + item.licenceNumber;
    },
    closeDialog: function () {
      var dialog = document.getElementById('confirmation-dialog');
      dialog.classList.remove('dialog--display')
    },
    checkEmptyFields: function () {
      if (this.firstName !== '' || this.lastName !== '' || this.emailAddress !== '' || this.phone !== '', this.company !== '' || this.billingAccountNumber !== '' || this.registeredCompanyNumber !== '') {
        this.haveEmptyFields = false;
      } else {
        this.haveEmptyFields = true;
      }
    }
  },
  computed: {
    formErrors() {
      const errors = this.$validator.errors;

      return errors;
    },
  },
  watch: {
    'checkEmptyFields': {
      deep: true,
      handler: function (newValue) {
        if (newValue !== '') {
          this.haveEmptyFields = false;
        } else {
          this.haveEmptyFields = true;
        }
      }

    },
    formErrors(value) {
      return this.$emit('form-errors', value)
    },
    'errors.items': function (newValue, oldValue) {
      this.isButtonDisabled = !newValue.length;
    },
    'basket': {
      deep: true,
      handler: function (newValue) {
        if (this.preparedForSend.length) {
          for (var i = 0; i < this.preparedForSend.length; i++) {
            for (var j = 0; j < newValue.length; j++) {
              var itemRegex = new RegExp('^' + newValue[j].title + ':' + newValue[j].editionName + ':');
              if (itemRegex.test(this.preparedForSend[i])) {
                this.preparedForSend.splice(i, 1, this.colonifyItem(newValue[j]));
              }
            }
          }
        } else {
          for (var k = 0; k < newValue.length; k++) {
            this.preparedForSend.push(this.colonifyItem(newValue[k]));
          }
        }
      }
    }
  },
  mounted: function () {

    this.fillBasket();
    this.getItemsFromLocalStorage();
    this.cartIsEmpty();
  }
});
