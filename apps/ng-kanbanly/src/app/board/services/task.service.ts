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
import { Task } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  createOne(task: Task) {
    const tasksRef = collection(this.firestore, 'tasks');
    return addDoc(tasksRef, task);
  }

  getOne(id: string): Observable<Task> {
    const taskRef = doc(this.firestore, `tasks/${id}`);
    return docData(taskRef, { idField: 'id' }) as Observable<Task>;
  }

  getAll(): Observable<Task[]> {
    const tasksRef = collection(this.firestore, 'tasks');

    return collectionData(query(tasksRef, orderBy('title', 'asc')), {
      idField: 'id',
    }) as Observable<Task[]>;
  }

  updateOne(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return setDoc(taskDocRef, task);
  }

  updateOneTitle(task: Task, newTitle: number) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return updateDoc(taskDocRef, { title: newTitle });
  }

  deleteOne(task: Task) {
    const taskDocRef = doc(this.firestore, `tasks/${task.id}`);
    return deleteDoc(taskDocRef);
  }
}
