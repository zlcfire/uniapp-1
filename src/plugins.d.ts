import Vue from 'vue';
import api from '@/service/api';
import conf from '@/service/conf';
import cmappClass from '@/plugins/cmapp.class';
import uniAjax from '@/plugins/uniAjax';

const cmapp = new cmappClass();
declare module 'vue/types/vue' {
    interface Vue {
      $api: api,
      $conf: conf,
      $cmapp: cmapp,
      $uniAjax: uniAjax,
    }
}
