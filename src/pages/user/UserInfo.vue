<template>
  <div class="mx-auto">
    <!-- component -->
    <div class="bg-white rounded pt-6 pb-8 mb-4 flex flex-col my-10">
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-username"
          >
            Username
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="text"
            :placeholder="user.username"
            v-model="userNewname"
          />
        </div>

        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-confirm"
          >
            Confirm
          </label>
          <button
            class="w-full h-1/2 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
            @click="editUsername"
          >
            EDIT
          </button>
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-password"
          >
            Change password
          </label>
          <input
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            id="grid-first-name"
            type="password"
            placeholder="******"
            v-model="userNewpassword"
          />
        </div>

        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Confirm
          </label>
          <button
            @click="$modal.show('password')"
            class="w-full h-1/2 text-center font-bold text-white uppercase transition-colors duration-200 transform bg-red-700 rounded dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
          >
            Change
          </button>
        </div>
      </div>

      <t-modal
        name="password"
        header="Confirm Change Password"
        variant="danger"
        hideCloseButton="true"
      >
        Please type the old password to confirm your change
        <t-input type="password" v-model="auth" />
        <p v-show="retypeNotmatch" class="text-red-600 text-xs italic">
          Not match, try again.
        </p>
        <template v-slot:footer>
          <button
            @click="editPassword"
            class="transition w-1/4 h-1/2 rounded bg-red-800 font-bold text-white hover:bg-red-600"
          >
            CHANGE
          </button>
          <button
            @click="$modal.hide('password')"
            class="transition w-1/4 h-1/2 rounded bg-gray-900 font-bold text-white hover:bg-gray-700"
          >
            CANCEL
          </button>
        </template>
      </t-modal>

      <div v-show="editUsernameAlert">
        <t-alert variant="success" show> Username changed </t-alert>
      </div>
      <div v-show="editPasswordAlert">
        <t-alert variant="success" show> Password changed </t-alert>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userNewname: "",
      userNewpassword: "",
      editUsernameAlert: false,
      retypeNotmatch: false,
      editPasswordAlert: false,
      auth: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    editUsername: function () {
      const self = this;
      this.$store
        .dispatch("USER_CHANGE_USERNAME", this.userNewname)
        .then(() => {
          self.userNewname = "";
          self.editUsernameAlert = true;
        })
        .catch(() => {
          alert("Change username failed");
        });
    },
    editPassword: function () {
      const self = this;
      if (this.auth === this.user.password) {
        this.$store
          .dispatch("USER_CHANGE_PASSWORD", this.userNewpassword)
          .then(() => {
            self.userNewpassword = "";
            self.editPasswordAlert = true;
            self.auth = "";
            self.$modal.hide("password");
            self.retypeNotmatch = false;
          })
          .catch(() => {
            alert("Change password failed");
          });
      } else {
        this.retypeNotmatch = true;
      }
    },
  },
  watch: {
    editUsernameAlert: function (ne, oe) {
      setTimeout(() => {
        this.editUsernameAlert = false;
      }, 3000);
    },
    editPasswordAlert: function (ne, oe) {
      setTimeout(() => {
        this.editPasswordAlert = false;
      }, 3000);
    },
  },
};
</script>