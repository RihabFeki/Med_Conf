import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Utils} from '../shared/utils';
import {StorageService} from "../shared/services/storage.service";

declare var jQuery;

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})

export class FullLayoutComponent implements OnInit {
  components: NavigationMain[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private stoarageService: StorageService) {
  }

  ngOnInit() {
    this.initializeNavBar();
    this.changeActiveUrl(this.router.url);
    Utils.initializeClickNavBar(50);
    Utils.initializeScroll(50);
  }

  initializeNavBar() {
    this.components = [{
      name: 'Gestion des congrès',
      visible: true,
      childrens: [
        {
          name: 'Liste des congrès',
          url: '/congres/list'
        },
        {
          name: 'Ajouter un congrès',
          url: '/congres/add'
        }


      ]
    },
{
      name: 'Gestion des  utitlisateurs',
      visible: true,
      childrens: [
        {
          name: 'Ajouter un utilisateur',
          url: '/usr/add'
        }

      ]
    },

      {
        name: 'Gestion Matiére premiéres',
        visible: true,
        childrens: [
          {
            name: 'Stock Matière Première',
            url: '/mp/stock'
          },
          {
            name: 'Achats Matière Première',
            url: '/mp/achat'
          }
        ]
      },
      {
        name: 'Gestion Production',
        visible: true,
        childrens: [

          {
            name: 'Recipients',
            url: '/production/recipient/list'
          },
          {
            name: 'Emballages',
            url: '/production/emballage/list'
          },

          {
            name: 'Produits',
            url: '/production/produit/list'
          },
          {
            name: 'Lots',
            url: '/production/lot/ajouter'
          }
        ]
      }
    ];
  }

  changeActiveUrl(url: string) {
    this.components.forEach(
      component => {
        component.active = '';
        if (url.indexOf(component.url) !== -1) {
          component.active = 'active';
        }
        if (component.childrens) {
          component.childrens.forEach(
            child => {
              child.active = '';
              if (url.indexOf(child.url) !== -1) {
                child.active = 'active';
              }
            }
          );
        }
      }
    );
  }

  logout() {
    this.stoarageService.removeAll();
    this.router.navigate(['/login']);
  }
}

export class NavigationMain {
  public name: string;
  public active?: string;
  public childrens?: ChildrenNavigation[] = [];
  public url?: string;
  public visible?: boolean;
}

export class ChildrenNavigation {
  public name: string;
  public active?: string;
  public url?: string;

  public action?: any;
  public hidden?: boolean;
}
