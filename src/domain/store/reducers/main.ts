/*
 * Rakuten React kit
 *
 * Copyright © 2016 Rakuten, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 

import { getLogger } from 'domain/logger';
import { store, State, Page, Item, DetailItem } from 'domain/store/main';

const logger = getLogger('State');

export function currentPage(currentPage: Page) {
  logger.debug(`Update current page ${currentPage.name}`);
  return store.swap(oldState  => ({...oldState, currentPage }));
}

export function allItems(items: Array<Item>) {
  logger.debug(`Update all items ${items.length} items`);
  return store.swap(oldState  => ({...oldState, items }));
  return store.swap(oldState  => ({...oldState, allItems: items }));
}

export function filteredItems(filteredItems: Array<Item>) {
  logger.debug(`Update filtered items ${filteredItems.length}`);
  return store.swap(oldState  => ({...oldState, filteredItems }));
}

export function detailItem(detail: DetailItem){
  logger.debug(`Update detail item ${ detail.name }`);
  return store.swap(oldState  => ({...oldState, detail }));
}
