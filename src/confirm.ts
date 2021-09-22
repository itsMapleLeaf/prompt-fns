import type { PromptOptions } from "./prompt"
import { basePrompt } from "./prompt"

export async function promptConfirm(
  options: PromptOptions<boolean> | string,
): Promise<boolean> {
  return basePrompt("confirm", options)
}
