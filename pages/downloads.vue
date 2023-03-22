 <template>

     <client-only>
       <v-container>
    <v-row  key="downloads-row">
      <v-col cols="12" md="6" class="mb-5" v-for="i in dt" :key="i.category" :id="i.category">
        <h2 class="mb-3">{{ i.category}}</h2>
      <v-expansion-panels accordion>
        <v-expansion-panel
            v-for="b in i.downloads"
            :key="b.name"
        >
          <v-expansion-panel-header><div><img :src="b.icon" style="max-height:32px;width:auto;min-width:auto;max-width:100%;" :alt="b.name"/></div>
            <div>{{ b.name }}</div>
            <div><v-btn class="float-end me-5" color="blue" @click="gotolink(b.link)">Download</v-btn></div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            {{ b.description }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      </v-col>
    </v-row>
       </v-container>
     </client-only>

  </template>

<script>
export default{
  name:"downloads",
  data(){
    return{
      dt:[
        {
          category:"Graphics",
          downloads:[
            {
              name: "Audacity",
              icon: "/assets/images/audacity-ikona.ico",
              link:"https://www.audacityteam.org/",
              description:"Бесплатен едитор на аудио датотеки со филтри"
            },
            {
              name: "Exact Audio Copy",
              icon: "/assets/images/eac-ikona.ico",
              link:"http://www.exactaudiocopy.de/",
              description:"Прецизен програм за снимање CD-а"
            },
            {
              name: "Fast Stone Image Viewer",
              icon: "/assets/images/fast-stone-ikona.ico",
              link:"http://www.faststone.org/FSViewerDetail.htm",
              description:"Бесплатен прегледник на слики"
            },
            {
              name: "Gadwin PrintScreen",
              icon: "/assets/images/gadwin-ikona.ico",
              link:"https://www.gadwin.com/printscreen/",
              description:"Бесплатен програм за сликање на екранот со голем број на опции"
            },
            {
              name: "К-Lite Codec Pack Full ",
              icon: "/assets/images/k-lite-ikona.ico",
              link:"http://www.codecguide.com/download_kl.htm/",
              description:"Бесплатни филмски и музички кодеци, вклучен е Media Player Classic"
            },
            {
              name: "Paint .NET",
              icon: "/assets/images/paint-ikona.ico",
              link:"https://www.getpaint.net/download.html",
              description:"Eден од најдобрите и најпопуларните бесплатни едитори на слики, го содржи и .NET Framework"
            },
            {
              name: "VLC Media Player",
              icon: "/assets/images/vlc-ikona.ico",
              link:"http://www.videolan.org/vlc/",
              description:"Мултимедиски репродуктор за гледање филмови, музика, конвертор со огромен број на функции"
            },
            {
              name: "Screen Video Recorder",
              icon: "/assets/images/screen-icon.gif",
              link:"https://thundersoft-free-screen-recorder.en.softonic.com",
              description:"Снимање на екран со голем број на опции, погоден за правење на видео туторијали  - Thundersoft"
            }
          ]
        },
        {
          category:"Web",
          downloads: [
            {
              name: "Google Chrome",
              icon: "/assets/images/chrome-ikona.ico",
              link:"https://www.google.com/chrome/",
              description:"Еден од најпопуларните пребарувачи"
            },
            {
              name: "Mozila Firefox",
              icon: "/assets/images/mozzila-ikona.ico",
              link:"http://www.mozilla.com/firefox/",
              description:"Еден од најпопуларните пребарувачи"
            },
            {
              name: "U-Torrent",
              icon: "/assets/images/utorrent-ikona.ico",
              link:"https://www.utorrent.com/utweb-index",
              description:"Најпопуларниот клиент за Bit-Torrent превземање"
            },    {
              name: "FileZilla",
              icon: "/assets/images/filezilla-ikona.ico",
              link:"https://filezilla-project.org/",
              description:"FTP & STP client со отворен код за комуникација помеѓу сервери"
            },
            {
              name: "TeamViewer",
              icon: "/assets/images/teamviewer-ikona.ico",
              link:"https://www.teamviewer.com/en/",
              description:"Овозможува пристап до било кој PC со што му го превземате екранот и работите на него - Remote Desktop"
            },
            {
              name: "Skype",
              icon: "/assets/images/skype-ikona.ico",
              link:"https://www.skype.com/en/get-skype/",
              description:"Најпопуларниот програм за видео разговори и телефонски повици насекаде низ светот"
            }
          ]
        },
        {
          category:"UTILITY",
          downloads: [
            {
              name: "7-Zip",
              icon: "/assets/images/7zip-ikona.ico",
              link:"https://www.7-zip.org/",
              description:"Бесплатен Aрхивер за пакување и распакување на фајлови "
            },
            {
              name: "CD-Burner",
              icon: "/assets/images/cdburner-ikona.ico",
              link:"https://cdburnerxp.se/en/download",
              description:"Бесплатен програм за режење на CD, DVD. Има и Blu-Ray support"
            },
            {
              name: "Unstoppable Copier",
              icon: "/assets/images/copier-ikona.ico",
              link:"http://www.roadkil.net/program.php?ProgramID=29",
              description:"Некогаш при копирање на масовни датотеки се јавуваат проблеми доколку ја користиме опцијата којашто ја нуди Windows. Тука овој програм е многу корисен "
            },    {
              name: "IZArc",
              icon: "/assets/images/izarc-ikona.ico",
              link:"http://izarc.org/",
              description:"Бесплатен универзален архивер/пакувач"
            },
            {
              name: "TeamViewer",
              icon: "/assets/images/teamviewer-ikona.ico",
              link:"https://www.teamviewer.com/en/",
              description:"Овозможува пристап до било кој PC со што му го превземате екранот и работите на него - Remote Desktop"
            },
            {
              name: "Skype",
              icon: "/assets/images/skype-ikona.ico",
              link:"https://www.skype.com/en/get-skype/",
              description:"Најпопуларниот програм за видео разговори и телефонски повици насекаде низ светот"
            }
          ]

        },
        {
          category: 'Text едитори и прегледници',
          downloads:[  {
            name: "Adobe Acrobat Reader",
            icon: "/assets/images/adobe-ikona.ico",
            link:"https://acrobat.adobe.com/us/en/acrobat/pdf-reader.html",
            description:"Бесплатен прегледник на PDF "
          },
            {
              name: "Notepad++",
              icon: "/assets/images/notepad-ikona.ico",
              link:"https://notepad-plus-plus.org/download/v7.6.3.html",
              description:"Бесплатен едитор на текст, популарен кај веб - девелопери"
            },
            {
              name: "Atom",
              icon: "/assets/images/atom-ikona.ico",
              link:"https://atom.io/",
              description:"Бесплатен едитор на текст, овозможува поддршка на Git"
            }
            ]
        }
      ]
    }
  },
  methods:{
    gotolink(link){
      window.open(link, '_blank');
    }
  }
}
</script>
