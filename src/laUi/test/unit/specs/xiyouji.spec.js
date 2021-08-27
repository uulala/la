import { createTest, destroyVM } from '../util';
import Xiyouji from 'packages/xiyouji';

describe('Xiyouji', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Xiyouji, true);
    expect(vm.$el).to.exist;
  });
});

