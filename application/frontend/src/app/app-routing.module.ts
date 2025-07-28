/*
Copyright 2024 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

/**
 * Routing is treated as an implementation detail where all
 * location changes are skipped.  If routing locations were to
 * be exposed, guards should be implemented and any effects that
 * interact with guarded navigation should implement success/failure
 * actions so that reducers can respond appropriately.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: '/scenarioPlanning',
    pathMatch: 'full',
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then((m) => m.VehiclesModule),
  },
  {
    path: 'shipments',
    loadChildren: () => import('./shipments/shipments.module').then((m) => m.ShipmentsModule),
  },
  {
    path: 'scenarioPlanning',
    loadChildren: () =>
      import('./scenario-planning/scenario-planning.module').then((m) => m.ScenarioPlanningModule),
  },
  {
    path: 'routesChart',
    loadChildren: () =>
      import('./routes-chart/routes-chart.module').then((m) => m.RoutesChartModule),
  },
  {
    path: 'routesMetadata',
    loadChildren: () =>
      import('./routes-metadata/routes-metadata.module').then((m) => m.RoutesMetadataModule),
  },
  {
    path: 'shipmentsMetadata',
    loadChildren: () =>
      import('./shipments-metadata/shipments-metadata.module').then(
        (m) => m.ShipmentsMetadataModule
      ),
  },
  {
    path: '**',
    redirectTo: '/scenarioPlanning',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
