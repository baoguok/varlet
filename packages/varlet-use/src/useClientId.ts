import { getCurrentInstance, onMounted, ref } from 'vue'
import { kebabCase } from '@varlet/shared'

export function useClientId() {
  const instance = getCurrentInstance()!
  const name = kebabCase(instance.type.name!)
  const id = ref<string | undefined>(process.env.NODE_ENV === 'test' ? `${name}-mock-id` : undefined)

  onMounted(() => {
    if (process.env.NODE_ENV !== 'test') {
      id.value = `${name}-${instance.uid}`
    }
  })

  return id
}
