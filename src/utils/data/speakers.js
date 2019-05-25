import you from '../../media/images/speakers/anonymous.png';
import globals from '../globals';

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
    avatar: you,
    worksIn: 'React Brasil',
    worksLink: globals.contacts.github,
    talk: globals.contacts.c4p,
    github: globals.contacts.github,
    isYou: true,
  },
];
