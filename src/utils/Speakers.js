import you from '../media/images/speakers/anonymous.png';
import PedroNauckImg from '../media/images/speakers/pedroNauck.jpg';
import LarissaImg from '../media/images/speakers/Larissa.jpg';
import NicholasImg from '../media/images/speakers/Nicholas.jpg';
import MariaImg from '../media/images/speakers/Maria.jpeg';
import MarceloImg from '../media/images/speakers/Marcelo.jpeg';
import BrunoDahoraImg from '../media/images/speakers/brunoDahora.jpg';
import GuilhermeVarandasImg from '../media/images/speakers/guilhermeVarandas.jpg';
import RaphaelPortoImg from '../media/images/speakers/raphaelPorto.jpg';
import RaphaelAmorimImg from '../media/images/speakers/raphaelAmorim.jpg';
import HugoBessaImg from '../media/images/speakers/hugoBessa.jpg';
import GuilhermeJaburImg from '../media/images/speakers/guilhermeJabur.jpg';
import LuizCamargoImg from '../media/images/speakers/luizCamargo.png';
import da2kImg from '../media/images/speakers/da2k.jpg';
import sibeliusImg from '../media/images/speakers/sibelius.jpg';
import matheusImg from '../media/images/speakers/matheus.jpg';
import renatoImg from '../media/images/speakers/renato.jpeg';

/**
 * Retorna um array com os palestrantes, exemplo:
 * 
 * {
 *    id: 1, //ID de controle
 *    name: '', //Nome do Palestrante
 *    talk: '', //Link da talk
 *    theme: '', //Tema da palestra
 *    videoId: '', //ID do vídeo do Youtube
 *    avatar: '', //Foto do palestrante
 *    worksIn: '', //Nome do local de trabalho
 *    worksLink: '', //URL do local de trabalho
 *    github: '' //URL do github
 * }
 */
export default [
  {
    id: 1,
    name: 'Você!',
    theme: 'Envie sua talk',
    // videoId: "8fUVjPiwMIA",
    avatar: you,
    worksIn: 'React Brasil',
    worksLink: 'https://github.com/react-brasil/',
    talk: 'https://forms.gle/yf1fyX87Rksvi6Sb6',
    github: 'https://github.com/react-brasil/',
  },
  {
    id: 2,
    name: 'Pedro Nauck',
    theme: 'Docz: de 0 a 5.000 ⭐️ em 2 semanas',
    talk: 'https://speakerdeck.com/pedronauck/reactconf-2018-presenting-docz',
    github: 'https://github.com/pedronauck',
    avatar: PedroNauckImg,
    worksIn: 'Docz',
    worksLink: 'https://www.docz.site/',
    videoId: 'NqcEZZqZ7xQ',
  },
  {
    id: 3,
    name: 'Guilherme Varandas',
    theme:
      'React Native no Banco do Brasil: Como RN nos faz poupar 1500 horas por projeto',
    talk:
      'https://www.icloud.com/keynote/0zIJ9Nrzh5ELy-X1ZuzaJKKoQ#ReactConfBR_-_GAM',
    github: 'https://github.com/gvarandas',
    avatar: GuilhermeVarandasImg,
    worksIn: 'Banco do Brasil',
    worksLink: 'https://www.bb.com.br',
    videoId: '5KL-6FkJvMw',
  },
  {
    id: 4,
    name: 'Bruno da Hora',
    theme: 'Otimize seu bundle com Webpack 4 e Create React App',
    talk: 'http://bit.ly/react_conf_brunodahora',
    github: 'https://github.com/brunodahora',
    avatar: BrunoDahoraImg,
    worksIn: 'Pipefy',
    worksLink: 'https://www.pipefy.com/',
    videoId: 'Hg_e7LX3VZo',
  },
  {
    id: 5,
    name: 'Maria Clara',
    theme: 'React nas trincheiras: Erros cometidos e lições aprendidas',
    videoId: 'Ywmah8gMtYE',
    avatar: MariaImg,
    worksIn: 'Picter',
    worksLink: 'https://www.picter.com/',
    github: 'https://github.com/olarclara/',
  },
  {
    id: 6,
    name: 'Nicholas Eduardo',
    theme: 'Como escalar projetos React com Monorepo',
    talk:
      'https://docs.google.com/presentation/d/1jzNwlew9qy9czg34PCOy3z4lKw4KofLZSnbHulXe9E0/edit?usp=sharing',
    videoId: 'fzvmz0aUw14',
    avatar: NicholasImg,
    worksIn: 'Dooile',
    worksLink: 'http://www.dooile.com/',
    github: 'https://github.com/nicholasess',
  },
  {
    id: 7,
    name: 'Larissa Farias',
    theme: 'TypeScript vs Flow no segundo semestre de 2018',
    talk: 'https://slides.com/larissathaisdefarias/typescript-vs-flow/',
    videoId: '8fUVjPiwMIA',
    avatar: LarissaImg,
    worksIn: 'VanHack',
    worksLink: 'http://www.vanhack.com/',
    github: 'https://github.com/larissathasdefar/',
  },
  {
    id: 8,
    name: 'Raphael Amorim',
    theme: 'Escrevendo seu próprio React Render',
    github: 'https://github.com/raphamorim',
    avatar: RaphaelAmorimImg,
    worksIn: 'GoDaddy',
    worksLink: 'https://www.godaddy.com/',
    videoId: 'ADFHQ-I9Scg',
  },
  {
    id: 9,
    name: 'Raphael Porto',
    theme: 'A Jornada do React Native na Globo.com',
    talk:
      'https://speakerdeck.com/raphaelpor/a-jornada-do-react-native-na-globo-dot-com',
    github: 'https://github.com/raphaelpor',
    avatar: RaphaelPortoImg,
    worksIn: 'Globo.com',
    worksLink: 'https://www.globo.com/',
    videoId: 'L16Wp-dS-HY',
  },
  {
    id: 10,
    name: 'Hugo Bessa',
    theme: 'Mantendo WebApps em produção sem dor de cabeça',
    talk:
      'https://speakerdeck.com/hugobessaa/mantendo-webapps-em-producao-sem-dor-de-cabeca',
    github: 'https://github.com/hugobessaa',
    avatar: HugoBessaImg,
    worksIn: 'Telnyx',
    worksLink: 'https://www.telnyx.com/',
    videoId: 'EMD6OEyySRQ',
  },
  {
    id: 11,
    name: 'Guilherme Jabur',
    theme: 'Animações com React Native',
    github: 'https://github.com/jaburcodes',
    avatar: GuilhermeJaburImg,
    worksIn: '',
    worksLink: '',
    videoId: 'kMaODEf4DVA',
  },
  {
    id: 12,
    name: 'Luiz Camargo',
    theme:
      'Uma experiência open-source com React Native, GraphQL e Relay Modern',
    github: 'https://github.com/lXSPandora',
    avatar: LuizCamargoImg,
    worksIn: 'Popstand',
    worksLink: 'https://www.popstand.com',
    videoId: 'Zt6NDC5wdFo',
  },
  {
    id: 13,
    name: 'Renato Benkendorf',
    theme: 'Modeling GraphQL APIs',
    talk: 'https://speakerdeck.com/renatobenks/modeling-graphql-apis',
    github: 'https://github.com/renatobenks',
    avatar: renatoImg,
    worksIn: 'Creditas',
    worksLink: 'https://www.creditas.com.br',
    videoId: 'icnLv0sj2BY',
  },
  {
    id: 14,
    name: 'Fernando Daciuk',
    theme: 'O poder do SSR',
    talk:
      'https://docs.google.com/presentation/d/1lY5u-TeYDVdg4rfd5uWub2EYC8QHNqbvnbtYOIQg_qs/present',
    github: 'https://github.com/fdaciuk',
    avatar: da2kImg,
    worksIn: 'queroser.ninja',
    worksLink: ' https://queroser.ninja',
    videoId: 'ZHpVZYnGx6s',
  },
  {
    id: 15,
    name: 'Sibelius Seraphini',
    theme: 'Deferred rendering e fetching com GraphQL e React',
    talk: 'https://speakerdeck.com/sibelius/the-frontend-dichotomy',
    github: 'https://github.com/sibelius',
    avatar: sibeliusImg,
    worksIn: 'Feedback House',
    worksLink: 'https://feedback.house',
    videoId: '4YjT7-ZcDtI',
  },
  {
    id: 16,
    name: 'Matheus Marsiglio',
    theme:
      'Meu próprio conjunto de regras para viver uma vida longa com state containers',
    talk:
      'https://www.icloud.com/keynote/0LZmoTka2s8xuTKJsEkUrniBA#happy-and-long-life-with-state-containers-pt',
    github: 'https://github.com/mtmr0x',
    avatar: matheusImg,
    worksIn: '',
    worksLink: '',
    videoId: 'jzW2WEzW0U8',
  },
];
