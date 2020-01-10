import { Component, OnInit } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.page.html',
  styleUrls: ['./shoplist.page.scss','./../app.component.scss'],
})
export class ShoplistPage implements OnInit {

	articulos: any;

	constructor(public taskService: TaskService)
	{
		this.getAllArticles();
  }

  ngOnInit() {
  }

	getAllArticles() {
    this.taskService.getAllArticles()
    .then(data => {
      this.articulos = data;
      console.log(this.articulos);
    });
  }
}
