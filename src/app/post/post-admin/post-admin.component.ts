import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-admin',
  templateUrl: './post-admin.component.html',
  styleUrls: ['./post-admin.component.css'],
})
export class PostAdminComponent {
  constructor(public postService: PostService) {}
  onAdicionarPost(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.postService.adicionarPost(
      form.value.titulo,
      form.value.data,
      form.value.imagem,
      form.value.texto
    );
    form.resetForm();
  }
}
