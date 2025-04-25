import { atom  } from 'jotai';
import { focusAtom } from 'jotai-optics';
import { atomWithStorage, createJSONStorage  } from 'jotai/utils'

export const userInfoAtom = atomWithStorage ("userInfo",{
  nome: "",
  saldo_disponivel: "",
  saldo_pendente: "",
  login: "",
  cpfcnpj: "",
  sessao_id: "",
  dataNascimento: "",
  assinatura: [],
  tipo_usuario: "",
  token_segurado:"",
  token_cliente:"",
  token_estabelecimento:"",
  token_entidade:"", 
  token_consultor:"",
  token_empresa:"",
  fotoperfil: "https://sistema.hermanosti.com/clubedebeneficio/img/profile_placeholder.png"
},  createJSONStorage(() => sessionStorage));

export const saldoDisponivelAtom = focusAtom(userInfoAtom, (optic) => optic.prop('saldo_disponivel'));
export const saldoPendenteAtom = focusAtom(userInfoAtom, (optic) => optic.prop('saldo_pendente'));
export const cpfcnpjAtom = focusAtom(userInfoAtom, (optic) => optic.prop('cpfcnpj'));
export const nomeAtom = focusAtom(userInfoAtom, (optic) => optic.prop('nome'));
export const idAtom = focusAtom(userInfoAtom, (optic) => optic.prop('id'));
export const tipoUsuarioAtom = focusAtom(userInfoAtom, (optic) => optic.prop('tipo_usuario'));
export const loginAtom = focusAtom(userInfoAtom, (optic) => optic.prop('login'));
export const assinaturaListaAtom = focusAtom(userInfoAtom, (optic) => optic.prop('assinatura'));
export const dataNascimentoAtom = focusAtom(userInfoAtom, (optic) => optic.prop('dataNascimento'));
export const tokenSeguradoAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_segurado'));
export const tokenClienteAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_cliente'));
export const tokenEstabelecimentoAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_estabelecimento'));
export const tokenEntidadeAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_entidade'));
export const tokenConsultorAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_consultor'));
export const tokenEmpresaAtom = focusAtom(userInfoAtom, (optic) => optic.prop('token_empresa'));

export const assinaturaAtom = atom({
  id: "",
  tipo_benef: "",
  token_benef: "",
  token_proposta: "",
  token_combo: "",
  nome: "",
  valor: "",
  cor: "",
  formapagto: "",
  periodicidadepagto: "",
});

export const carrinhoAtom = atom([]);
export const showCarrinhoAtom = atom(true);

export const comprovanteAbertoAtom = atom(false)