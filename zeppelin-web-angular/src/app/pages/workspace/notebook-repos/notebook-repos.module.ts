/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ShareModule } from '@zeppelin/share';

import {
  NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzIconModule,
  NzInputModule,
  NzSelectModule,
  NzTableModule
} from 'ng-zorro-antd';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotebookRepoItemComponent } from './item/item.component';
import { NotebookReposRoutingModule } from './notebook-repos-routing.module';
import { NotebookReposComponent } from './notebook-repos.component';

@NgModule({
  declarations: [NotebookReposComponent, NotebookRepoItemComponent],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    NotebookReposRoutingModule,
    NzCardModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule
  ]
})
export class NotebookReposModule {}
