import { createTest, destroyVM } from '../util';
import Alert from 'packages/alert';

describe('Alert', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Alert, true);
    expect(vm.$el).to.exist;
  });
});

