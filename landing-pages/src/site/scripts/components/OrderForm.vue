<template>
  <form v-on:submit="validateBeforeSubmit">
    <slot name="hidden-fields" />
    <section class="section section--gutter no-gutter--all section--white form-fields-section">
      <fieldset class="grid gutter--bottom">
        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('edition')">
            Please choose an edition.
          </FieldCaption>
          <Field
            label="Select edition"
            required
          >
            <Select
              v-model="edition"
              v-validate="'required'"
              name="edition"
            >
              <option disabled value="">Choose your Edition</option>
              <option
                v-for="(label, value) in editionOptions"
                :key="value"
                :value="label"
              >
                {{ label }}
              </option>
            </Select>
          </Field>
        </div>
        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('licenceCount')">
            Please enter a number of licences.
          </FieldCaption>
          <Field
            label="Number of licences"
            required
          >
            <Input
              v-model="licenceCount"
              v-validate="'required|numeric|min_value:1'"
              name="licenceCount"
              type="number"
            />
          </Field>
        </div>
      </fieldset>
    </section>

    <section class="section section--gutter no-gutter--all section--white form-fields-section">
      <fieldset class="grid gutter--top gutter--bottom">
        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('firstName')">
            Please enter a valid first name, at least 2 characters long.
          </FieldCaption>
          <Field
            label="First name"
            required
          >
            <Input
              v-model="firstName"
              v-validate="'required'"
              name="firstName"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('lastName')">
            Please enter a valid last name, at least 2 characters long.
          </FieldCaption>
          <Field
            label="Last name"
            required
          >
            <Input
              v-model="lastName"
              v-validate="'required'"
              name="lastName"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('emailAddress')">
            Please enter a valid email address.
          </FieldCaption>
          <Field
            label="Email address"
            required
          >
            <Input
              v-model="emailAddress"
              v-validate="'required|email'"
              name="emailAddress"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/2 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('busPhone')">
            Please enter a valid mobile number.
          </FieldCaption>
          <Field
            label="Phone number"
            required
          >
            <Input
              v-model="busPhone"
              v-validate="'required'"
              name="busPhone"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/3 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('company')">
            Please enter a valid company name, at least 2 characters long with no special characters.
          </FieldCaption>
          <Field
            label="Company name"
            required
          >
            <Input
              v-model="company"
              v-validate="'required|alpha_spaces'"
              name="company"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/3 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('address1')">
            Please enter a valid first address line.
          </FieldCaption>
          <Field
            label="Address"
            required
          >
            <Input
              v-model="address1"
              v-validate="'required'"
              name="address1"
            />
          </Field>
        </div>

        <div class="grid__item grid__item--1/3 grid__item--sm-1/1 form-input-single">
          <FieldCaption v-show="errors.first('zipPostal')">
            Please enter a valid postcode.
          </FieldCaption>
          <Field
            label="Postcode"
            required
          >
            <Input
              v-model="zipPostal"
              v-validate="{
                required: true,
                min: 6,
                max: 8,
                regex: /[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}/i
              }"
              name="zipPostal"
            />
          </Field>
        </div>
      </fieldset>

      <fieldset class="align--center section--gutter">
        <div
          v-if="showOffice365Fields"
          class="grid gutter--top grid--center"
        >
          <div class="grid__item grid__item--1/1">
            <Field
              tag="div"
              label="Do you already have a Microsoft Tenant Name?"
              required
            >
              <span class="d-inline">
                <input
                  id="tenant-yes"
                  v-model="hasExistingTenantName"
                  v-validate="'required|alpha_spaces'"
                  name="existingTenant"
                  type="radio"
                  :value="true"
                >
                <label for="tenant-yes">Yes</label>
              </span>
              <span class="d-inline gutter--left">
                <input
                  id="tenant-no"
                  v-model="hasExistingTenantName"
                  v-validate="'required|alpha_spaces'"
                  name="existingTenant"
                  type="radio"
                  :value="false"
                >
                <label for="tenant-no">No</label>
              </span>
            </Field>
          </div>

          <div
            v-if="hasExistingTenantName === true"
            class="gutter--top grid__item grid__item--2/5 grid__item--sm-1/1"
          >
            <FieldCaption v-show="errors.first('tenantName')">
              Please enter a Microsoft Tenant Name.
            </FieldCaption>
            <Input
              v-model="tenantName"
              v-validate="'required|alpha_spaces'"
              name="tenantName"
              placeholder="Microsoft Tenant Name"
            />
          </div>
          <div
            v-if="hasExistingTenantName === false"
            class="gutter--top grid__item grid__item--2/5 grid__item--sm-1/1"
          >
            <Input
              key="microsoftTenantNameGenerated"
              v-validate="'required|alpha_spaces'"
              class="input--generated gutter--bottom"
              name="microsoftTenantNameGenerated"
              readonly
              :value="microsoftTenantNameGenerated"
              placeholder="Microsoft Tenant Name Generated"
            />
            <Input
              key="microsoftSecondaryTenantNameGenerated"
              v-validate="'required'"
              class="input--generated gutter--bottom"
              name="microsoftSecondaryTenantNameGenerated"
              readonly
              :value="microsoftSecondaryTenantNameGenerated"
              placeholder="Secondary Microsoft Tenant Name Generated"
            />
            <p>
              <small>If neither of these names are available, Vodafone will have all rights to choose a relevant name for you.</small>
            </p>
          </div>
        </div>
      </fieldset>

      <div class="grid align--center">
        <div class="grid__item grid__item--2/3 grid__item--sm-1/1 gutter--bottom">
          <p class="align--center">
            <small>This information is only being used to process your order and not for marketing purposes. If you would like to update your marketing preferences you can do so via your MyVodafone account.</small>
          </p>

          <span class="d-inline">
            <FieldCaption v-show="errors.first('agreementAccepted')" style="max-width: 280px; margin-left: auto; margin-right: auto;">
              Please agree to the Terms and Conditions.
            </FieldCaption>
            <input
              id="agreement"
              v-model="agreementAccepted"
              v-validate="'required'"
              name="agreementAccepted"
              type="checkbox"
              value="on"
            >
            <label
              class="display--inline form__label form__label--required"
              for="agreement"
            >I agree to the <a
              class="link--underline"
              href="https://www.vodafone.co.uk/terms-and-conditions/Business/Cloudservices/Vodafone-cloud-services/index.htm"
              target="_blank"
            >Terms and Conditions</a></label>
          </span>
        </div>
      </div>

      <div class="align--center gutter--all">
        <Button :disabled="!formValid">
          Order now
        </Button>
      </div>
    </section>
  </form>
</template>

<script>
  import { isNil, isEmpty, pick } from 'lodash';
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import {
    Button,
    Field,
    FieldCaption,
    Input,
    Select
  } from 'app-marketplace-ui-components';

  Vue.use(VeeValidate);

  export default {
    name: 'vf-order-form',
    components: {
      Button,
      Field,
      FieldCaption,
      Input,
      Select
    },
    props: {
      initialData: Object,
      editionOptions: {
        type: Object,
        required: true
      },
      showOffice365Fields: {
        type: Boolean,
        default: true
      },
      selectedEdition: {
        type: String,
        default: '',
        validate: value => Object.keys(this.editionOptions).includes(value)
      }
    },
    data: () => ({
      edition: '',
      licenceCount: null,
      firstName: '',
      lastName: '',
      emailAddress: '',
      busPhone: '',
      company: '',
      address1: '',
      country: '',
      zipPostal: '',
      tenantName: '',
      hasExistingTenantName: null,
      agreementAccepted: false,
      redirectUrl: ''
    }),
    computed: {
      microsoftTenantNameGenerated: function () {
        return this.company.replace(/\s/g, '');
      },
      microsoftSecondaryTenantNameGenerated: function () {
        return this.microsoftTenantNameGenerated.replace(/(.+)/, '$1365');
      },
      formValid: function () {
        return !isNil(this.hasExistingTenantName) && isEmpty(this.errors.items) && this.agreementAccepted;
      }
    },
    watch: {
      selectedEdition: function (val) {
        this.edition = val;
      }
    },
    mounted() {
      Object.assign(
        this,
        pick(this.initialData, [
          'firstName',
          'lastName',
          'emailAddress',
          'busPhone',
          'company',
          'address1',
          'country',
          'zipPostal'
        ]),
        {
          edition: this.selectedEdition
        }
      );
    },
    methods: {
      validateBeforeSubmit(e) {
        this.$validator.validateAll().then((result) => {
          if (result) {
            $("#redirectUrl").val('http://uk-mktg.vodafone.com/appdirect-thank-you?edition=' + encodeURIComponent(this.edition) + '&licenseCount=' + this.licenceCount);
            return true;
          } else {
            this.$el.querySelector('[name="' + Object.keys(this.errors.collect())[0] + '"]').scrollIntoView(false);
            e.preventDefault();
            return false;
          }
        });
      }
    }
  };
</script>

<style>
  .form-fields-section {
    background: white;
    padding: 30px;
    margin-top: 50px !important;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .form-input-single {
    padding: 10px;
  }

  .input--generated {
    opacity: 1 !important;
  }

  .link--underline {
    text-decoration: underline;
  }
</style>
