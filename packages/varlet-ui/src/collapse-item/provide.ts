import { type ComputedRef } from 'vue'
import { assert } from '@varlet/shared'
import { useParent } from '@varlet/use'
import { COLLAPSE_BIND_COLLAPSE_ITEM_KEY, CollapseProvider } from '../collapse/provide'

export interface CollapseItemProvider {
  index: ComputedRef<number>
  name: ComputedRef<string | number | undefined>
  disabled: ComputedRef<boolean>
  init(show: boolean): void
}

export function useCollapse() {
  const { parentProvider, index, bindParent } = useParent<CollapseProvider, CollapseItemProvider>(
    COLLAPSE_BIND_COLLAPSE_ITEM_KEY,
  )

  assert(!!bindParent, 'Collapse', '<var-collapse-item/> must in <var-collapse>')

  return {
    index,
    collapse: parentProvider,
    bindCollapse: bindParent,
  }
}
