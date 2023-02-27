import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Column } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ColumnService {
  constructor(private firestore: Firestore) {}

  createOne(column: Column) {
    const columnsRef = collection(this.firestore, 'columns');
    return addDoc(columnsRef, column);
  }

  getOne(id: string): Observable<Column> {
    const columnRef = doc(this.firestore, `columns/${id}`);
    return docData(columnRef, { idField: 'id' }) as Observable<Column>;
  }

  getAll(): Observable<Column[]> {
    const columnsRef = collection(this.firestore, 'columns');

    return collectionData(query(columnsRef, orderBy('index', 'asc')), {
      idField: 'id',
    }) as Observable<Column[]>;
  }

  updateOne(column: Column) {
    const columnDocRef = doc(this.firestore, `columns/${column.id}`);
    return setDoc(columnDocRef, column);
  }

  updateOneTitle(column: Column, newTitle: number) {
    const columnDocRef = doc(this.firestore, `columns/${column.id}`);
    return updateDoc(columnDocRef, { title: newTitle });
  }

  deleteOne(column: Column) {
    const columnDocRef = doc(this.firestore, `columns/${column.id}`);
    return deleteDoc(columnDocRef);
  }
}
