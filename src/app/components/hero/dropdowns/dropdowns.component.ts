import { Component } from '@angular/core';

interface SubMenuItem {
  name: string;
}

interface DropdownMenu {
  name: string;
  isOpen: boolean;
  subMenu?: SubMenuItem[];
}

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css'],
})
export class DropdownsComponent {
  menuItem: DropdownMenu[] = [
    {
      name: "Women's Fashion",
      isOpen: false,
      subMenu: [{ name: 'Shirts' }, { name: 'Pants' }],
    },
    {
      name: "Men's Fashion",
      isOpen: false,
      subMenu: [{ name: 'Shirts' }, { name: 'Pants' }],
    },
    { name: 'Electronics', isOpen: false },
    { name: 'Home & LifeStyle', isOpen: false },
    { name: 'Medicines', isOpen: false },
    { name: 'Sports & Outdoor', isOpen: false },
    { name: "Baby's & Toys", isOpen: false },
    { name: 'Groceries & Pets', isOpen: false },
    { name: 'Health & Beauty', isOpen: false },
  ];

  toggleMenu(i: number): void {
    this.menuItem[i].isOpen = !this.menuItem[i].isOpen;
  }
}
