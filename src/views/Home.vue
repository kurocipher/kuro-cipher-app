<template>
<!-- eslint-disable -->
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
            <ion-button color="primary" size="small" @click="copyText(selectedSegment)">
              <ion-icon slot="icon-only" :icon="documentsOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
            <ion-button color="danger" size="small" @click="clearInputs()">
              <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
            </ion-button>
        </ion-buttons>
        <ion-segment @ionChange="segmentChanged($event)" ref="cipherSegment" :value="selectedSegment" color="primary">
          <ion-segment-button value="english">
            <ion-label>English</ion-label>
          </ion-segment-button>
          <ion-segment-button value="encoded">
            <ion-label>Encoded</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <div id="container">
        <ion-grid>
          <ion-row v-if="selectedSegment === 'english'">
            <ion-col>
              <ion-textarea ref="engtext" rows="10" @ionBlur="engTextChange($event)" :value="engText" autofocus="true" placeholder="Enter english text here..."></ion-textarea>
            </ion-col>
          </ion-row>
          <ion-row v-else>
            <ion-col>
              <ion-textarea ref="encodetext" rows="10" @ionBlur="encodeTextChange($event)" :value="encodeText" placeholder="Enter encode text here..."></ion-textarea>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonSegment, IonSegmentButton, IonButtons, IonButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { 
  documentsOutline,
  trashOutline
} from 'ionicons/icons';
import { Clipboard } from '@ionic-native/clipboard';
import { Keyboard } from '@ionic-native/keyboard';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonButtons,
    IonButton,
    IonIcon,
  },
  data: function() {
    return {
      selectedSegment: 'english',
      engText: '',
      encodeText: '',
    }
  },
  mounted(){
    Keyboard.show();
  },
  methods: {
    segmentChanged(ev: CustomEvent) {
      this.selectedSegment =  ev.detail.value;
    },
    engTextChange(ev: CustomEvent) {
      this.engText = ev.detail.target.value != null ? ev.detail.target.value : '';
      //encode the code
      const encoded: any = {
        a: '⅃', b: 'ⵡ', c: 'L',
        d: 'コ', e: 'ロ', f: 'ⵎ',
        g: 'ᒣ', h: '⨅', i: 'ᒥ',
        j: 'ᒲ', k: '⨃', l: 'ᒷ',
        m: 'ᑔ', n: '⚀', o: 'ᑢ',
        p: 'ךּ', q: '⩀', r: '⟔',
        s: 'ⴸ', t: 'く', u: 'ᨈ',
        v: '＞', w: 'ᨉ', x: 'ᑅ',
        y: 'ᨊ', z: 'ᐷ'
      };

      const value: string = this.engText.toLowerCase();
      let cipher = '';
      for(let i = 0 ; i < value.length; i++){
        if (value[i] in encoded) {
          cipher += encoded[value[i]];
        } else {
          cipher += value[i];
        }
      }
      this.encodeText = cipher;
      // console.log(encoded[value]);
    },
    encodeTextChange(ev: CustomEvent) {
      this.encodeText = ev.detail.target.value != null ? ev.detail.target.value : '';
      //decode the code
      const decoded: any = {
        '⅃': 'a',  'ⵡ': 'b',  'L': 'c',
        'コ': 'd',  'ロ': 'e',  'ⵎ': 'f',
        'ᒣ': 'g',  '⨅': 'h',  'ᒥ': 'i',
        'ᒲ': 'j',  '⨃': 'k',  'ᒷ': 'l',
        'ᑔ': 'm',  '⚀': 'n',  'ᑢ': 'o',
        'ךּ': 'p',  '⩀': 'q',  '⟔': 'r',
        'ⴸ': 's',  'く': 't',  'ᨈ': 'u',
        '＞': 'v',  'ᨉ': 'w',  'ᑅ': 'x',
        'ᨊ': 'y',  'ᐷ': 'z'
      }

      const value: string = this.encodeText.toLowerCase();
      let decipher = '';
      for(let i = 0 ; i < value.length; i++){
        if (value[i] in decoded) {
          decipher += decoded[value[i]];
        } else {
          decipher += value[i];
        }
      }
      this.engText = decipher;
    },
    copyText(segment: any) {
      console.log(segment);
      if (segment === 'english') {
        Clipboard.copy(this.engText);
      }
    },
    clearInputs() {
      this.engText = '';
      this.encodeText = '';
    }
  },
  setup() {
    return {
      documentsOutline,
      trashOutline
    }
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 140px;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
ion-col {
  text-align: left;
  border: solid 1px #ddd;
  font-size: 12px;
}
ion-toolbar > ion-segment > ion-segment-button > ion-label{
  font-size: 12px;
}
ion-toolbar > ion-buttons > ion-button > .button-native > .button-inner {
  font-size: 11px;
}
</style>