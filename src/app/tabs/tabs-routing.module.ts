import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Import standalone page components directly
// Make sure these paths are correct relative to tabs-routing.module.ts
import { BudgetFriendlyTipsPage } from '../pages/budget-friendly-tips/budget-friendly-tips.page';
import { LuxuriousPage } from '../pages/luxurious/luxurious.page';
import { TicketsPage } from '../pages/tickets/tickets.page';


const routes: Routes = [
  {
    // This route now loads the standalone TabsPage component
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'budget-friendly-tips', // Path relative to '/tabs'
        // *** IMPORTANT: Use loadComponent and reference the .page file ***
        loadComponent: () => import('../pages/budget-friendly-tips/budget-friendly-tips.page').then(m => m.BudgetFriendlyTipsPage)
      },
      {
        path: 'luxurious', // Path relative to '/tabs'
        // *** IMPORTANT: Use loadComponent and reference the .page file ***
        loadComponent: () => import('../pages/luxurious/luxurious.page').then( m => m.LuxuriousPage)
      },
      {
        path: 'tickets', // Path relative to '/tabs'
        // *** IMPORTANT: Use loadComponent and reference the .page file ***
        loadComponent: () => import('../pages/tickets/tickets.page').then( m => m.TicketsPage)
      },
      {
        // This sets the default tab when you navigate to /tabs
        path: '',
        redirectTo: '/tabs/budget-friendly-tips', // Or whichever tab you want to load first
        pathMatch: 'full'
      }
    ]
  },
  {
    // This redirects the root path '/' to the default tab route
    path: '',
    redirectTo: '/tabs/budget-friendly-tips', // Make sure this matches the default tab above
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] // Always good practice to export RouterModule
})

export class TabsPageRoutingModule {}