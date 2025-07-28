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

import { SearchMode } from 'src/app/core/models/dispatcher.model';

export const SEARCH_MODE_LABELS = {
  [SearchMode.RETURN_FAST]: 'Devolver primera solución buena',
  [SearchMode.CONSUME_ALL_AVAILABLE_TIME]: 'Buscar mejores soluciones hasta el límite de tiempo',
};

export enum RelaxationLevelNames {
  RELAXATION_LEVEL_UNSPECIFIED = 'Sin relajación',
  RELAX_VISIT_TIMES_AFTER_THRESHOLD = 'Relajar tiempo de visita',
  RELAX_VISIT_TIMES_AND_SEQUENCE_AFTER_THRESHOLD = 'Relajar tiempo de visita y secuencias',
  RELAX_ALL_AFTER_THRESHOLD = 'Relajar todo',
}
