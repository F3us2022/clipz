import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];
  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((ele) => ele.id !== id);
  }

  isModalOpen(id: string) {
    const val = this.modals.find((ele) => {
      ele.id === id;
      return ele.visible;
    });
    return val?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((ele) => {
      return ele.id === id;
    });
    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
