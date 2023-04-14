import {Component} from '@angular/core';
import {Usuario} from './shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Social IFPB';
  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = [
      new Usuario('Simon','05206246450',21)
    ];//new Array<Usuario>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

  excluir(usuarioRemover: Usuario){
    const indx = this.usuarios.findIndex(usuario => usuario.cpf === usuarioRemover.cpf);
    this.usuarios.splice(indx,1);
  }

  editar(usuarioEditar: Usuario){
    this.usuario = usuarioEditar;
  }
}
