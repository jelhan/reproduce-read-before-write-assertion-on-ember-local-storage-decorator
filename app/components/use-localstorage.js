import Component from '@glimmer/component';
import localStorage from 'ember-local-storage-decorator';
import { action } from '@ember/object';

export default class UseLocalstorageComponent extends Component {
  @localStorage() foo;

  @action
  updateFoo(event) {
    this.foo = event.target.value;
  }
}
