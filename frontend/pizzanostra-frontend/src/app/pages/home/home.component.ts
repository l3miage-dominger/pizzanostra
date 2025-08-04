import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


pizzas = [
  // Base tomate
  {
    nombre: 'Pizza Marghuerite',
    descripcion: 'Tomate, Mozza, Olives, Basilic.',
    imagen: 'assets/marghuerite.webp'
  },
  {
    nombre: 'Pizza Napolitana',
    descripcion: 'Tomate, Mozza, Anchois, Câpres, Olives.',
    imagen: 'assets/napolitana.webp'
  },
  {
    nombre: 'Pizza Romana',
    descripcion: 'Tomate, Mozza, Jambon blanc, Olives.',
    imagen: 'assets/romana.webp'
  },
  {
    nombre: 'Pizza Regina',
    descripcion: 'Tomate, Mozza, Jambon blanc, Champignons, Olives, Œuf.',
    imagen: 'assets/regina.webp'
  },
  {
    nombre: 'Pizza 4 Fromages',
    descripcion: 'Tomate, Mozza, Chèvre, Gorgonzola, Raclette, Olives.',
    imagen: 'assets/4fromages_tomate.webp'
  },
  {
    nombre: 'Pizza Thon',
    descripcion: 'Tomate, Mozza, Thon, Crème, Persillade.',
    imagen: 'assets/thon.webp'
  },
  {
    nombre: 'Pizza Veggie',
    descripcion: 'Tomate, Mozza, Champignons, Oignons, Poivrons, Aubergines, Persillade, Olives.',
    imagen: 'assets/veggie.webp'
  },
  {
    nombre: 'Pizza Champignons',
    descripcion: 'Tomate, Mozza, Champignons, Crème, Olives, Persillade.',
    imagen: 'assets/champignons.webp'
  },
  {
    nombre: 'Pizza Merguez',
    descripcion: 'Tomate, Mozza, Merguez, Olives.',
    imagen: 'assets/merguez.webp'
  },
  {
    nombre: 'Pizza Milano',
    descripcion: 'Tomate, Mozza, Viande hachée, Œuf, Crème (Ricotta).',
    imagen: 'assets/milano.webp'
  },
  {
    nombre: 'Pizza Caprine',
    descripcion: 'Tomate, Mozza, Jambon blanc, Chèvre ou Boursin, Champignons, Œuf, Crème.',
    imagen: 'assets/caprine.webp'
  },
  {
    nombre: 'Pizza Montagnarde',
    descripcion: 'Tomate, Mozza, Jambon blanc ou cru, Raclette, Crème, Patate.',
    imagen: 'assets/montagnarde.webp'
  },
  {
    nombre: 'Pizza USA',
    descripcion: 'Tomate, Mozza, Oignons, Cornichons, Viande hachée ou Poulet, Cheddar, Patates, Sauce Big Mike.',
    imagen: 'assets/usa.webp'
  },
  {
    nombre: 'Pizza Andalouse',
    descripcion: 'Tomate, Mozza, Chorizo, Poivrons, Olives, Sauce andalouse.',
    imagen: 'assets/andalouse.webp'
  },
  {
    nombre: 'Pizza Marocaine',
    descripcion: 'Tomate, Mozza, Viande hachée, Merguez, Sauce marocaine.',
    imagen: 'assets/marocaine.webp'
  },
  {
    nombre: 'Pizza Suduk',
    descripcion: 'Tomate, Mozza, Sudük, Féta, Olives.',
    imagen: 'assets/suduk.webp'
  },
  {
    nombre: 'Pizza Italia',
    descripcion: 'Tomate, Mozza, Mortadelle, Ricotta, Basilic, Olives, Provolone.',
    imagen: 'assets/italia.webp'
  },
  {
    nombre: 'Pizza La Rafa',
    descripcion: 'Tomate, Mozza, Viande hachée, Oignons, Poivrons, Sauce BBQ.',
    imagen: 'assets/lrafa.webp'
  },
  {
    nombre: 'Pizza Carnivore',
    descripcion: 'Tomate, Mozza, Viande hachée, Poulet, Merguez, Sauce au choix.',
    imagen: 'assets/carnivore.webp'
  },
  {
    nombre: 'Pizza Burrata',
    descripcion: 'Tomate, Mozza, Tomate cerise, Burrata, Persillade ou Balsamique et Roquette.',
    imagen: 'assets/burrata.webp'
  },

  // Base crème
  {
    nombre: 'Pizza Miel',
    descripcion: 'Crème fraîche, Mozza, Chèvre, Miel, Noix.',
    imagen: 'assets/miel.webp'
  },
  {
    nombre: 'Pizza Saumon',
    descripcion: 'Crème fraîche, Mozza, Saumon, Citron, Olives.',
    imagen: 'assets/saumon.webp'
  },
  {
    nombre: 'Pizza Raviolé',
    descripcion: 'Crème fraîche, Mozza, Ravioles.',
    imagen: 'assets/raviole.webp'
  },
  {
    nombre: 'Pizza Raviolé Saumon ou Poulet',
    descripcion: 'Crème fraîche, Mozza, Ravioles, Saumon ou Poulet.',
    imagen: 'assets/raviole_saumon_poulet.webp'
  },
  {
    nombre: 'Pizza Carbonara',
    descripcion: 'Crème fraîche, Lardons, Oignons, Œuf, Mozza.',
    imagen: 'assets/carbonara.webp'
  },
  {
    nombre: 'Pizza Tartiflette',
    descripcion: 'Crème fraîche, Lardons, Oignons, Patate, Reblochon, Mozza.',
    imagen: 'assets/tartiflette.webp'
  },
  {
    nombre: 'Pizza Bollywood',
    descripcion: 'Crème fraîche, Poivrons, Poulet, Sauce curry, Mozza.',
    imagen: 'assets/bollywood.webp'
  },
  {
    nombre: 'Pizza Kebab',
    descripcion: 'Base crème fraîche, Sauce pita, Tomate cerise, Oignons, Kebab, Mozza.',
    imagen: 'assets/kebab.webp'
  },
  {
    nombre: 'Pizza Poulet',
    descripcion: 'Crème fraîche, Poulet, Champignons, Œuf, Boursin, Mozza.',
    imagen: 'assets/poulet.webp'
  },
  {
    nombre: 'Pizza Reblochon',
    descripcion: 'Crème fraîche, Reblochon, Lardons, Oignons, Patate, Mozza.',
    imagen: 'assets/reblochon.webp'
  },
  {
    nombre: 'Pizza Boursin',
    descripcion: 'Crème fraîche, Boursin, Poulet, Champignons, Mozza.',
    imagen: 'assets/boursin.webp'
  },
  {
    nombre: 'Pizza Chèvre Miel',
    descripcion: 'Crème fraîche, Chèvre, Miel, Noix, Mozza.',
    imagen: 'assets/chevre_miel.webp'
  },
  {
    nombre: 'Pizza 4 Fromages (base crème)',
    descripcion: 'Crème fraîche, Mozza, Chèvre, Reblochon, Boursin.',
    imagen: 'assets/4fromages_creme.webp'
  }
];




}
