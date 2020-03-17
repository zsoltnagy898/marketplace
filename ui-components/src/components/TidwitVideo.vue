<template>
  <video controls>
    <source :src="src" />
  </video>
</template>

<script>
import axios from 'axios';
import { isEmpty, pick, some } from 'lodash';

export default {
  name: 'tidwit-video',
  props: {
    accountId: {
      type: String,
      required: true
    },
    instanceDomain: {
      type: String,
      required: true
    },
    accessToken: {
      type: String,
      required: true
    },
    contentId: {
      type: String,
      required: true
    }
  },
  computed: {
    client: function () {
      return axios.create({
        baseURL: `https://${this.accountId}.${this.instanceDomain}/api/`,
        headers: {
          Authorization: 'Bearer ' + this.accessToken
        }
      });
    },
    src: async function () {
      if (some(pick(this, ['accountId', 'instanceDomain', 'accessToken', 'contentId']), isEmpty)) {
        return null;
      }

      try {
        const data = await this.client.get('/contentitems.get?id=' + this.contentId);

        if (contentType !== 'Video') {
          return null;
        }

        return data.link;
      } catch (e) {
        return null;
      }
    }
  }
};
</script>
