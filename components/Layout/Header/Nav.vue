<template>
  <div class="header-nav colors__font_white">
    <nuxt-link :to="localePath('/articles')" class="header-nav__link fonts__h5">
      {{ $t("layout.header.links.articles") }}
    </nuxt-link>
    <nuxt-link :to="localePath('/hubs')" class="header-nav__link fonts__h5">
      {{ $t("layout.header.links.hubs") }}
    </nuxt-link>
    <nuxt-link :to="localePath('/users')" class="header-nav__link fonts__h5">
      {{ $t("layout.header.links.authors") }}
    </nuxt-link>
    <nuxt-link :to="localePath('/problems')" class="header-nav__link fonts__h5">
      {{ $t("layout.header.links.problems") }}
    </nuxt-link>
    <nav-profile v-if="profile" class="header-nav__profile" :data="profile" />
    <div v-else class="header-nav__auth">
      <ui-button
        :variant="['outline', 'light']"
        to="/auth/login"
        class="header-nav__auth_login"
      >
        {{ $t("layout.header.links.login") }}
      </ui-button>
      <ui-button :variant="['primary']" to="/auth/register">
        {{ $t("layout.header.links.register") }}
      </ui-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

import NavProfile from "~/components/Layout/Header/Nav/Profile"
import UiButton from "~/components/UI/Buttons/Button"

export default {
  name: "HeaderNav",
  components: {
    NavProfile,
    UiButton,
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/base/grid";
@import "../../../assets/styles/base/fonts";
@import "../../../assets/styles/base/colors";

.header-nav {
  display: flex;
  align-items: center;

  &__link {
    color: $white;
    margin-right: nonScalePx(24);
    padding-top: nonScalePx(5);

    &:last-child {
      margin-right: 0;
    }
  }

  &__profile {
    margin-left: nonScalePx(12);
  }

  &__auth {
    display: flex;
    align-items: center;
    margin-left: nonScalePx(32);

    &_login {
      margin-right: nonScalePx(8);
    }
  }

  @media (max-width: $desktop-break-point) {
    &__link {
      margin-right: pxToVwDesktop(24);
      padding-top: pxToVwDesktop(5);
    }

    &__profile {
      margin-left: pxToVwDesktop(12);
    }

    &__auth {
      margin-left: pxToVwDesktop(32);

      &_login {
        margin-right: pxToVwDesktop(8);
      }
    }
  }
}
</style>
