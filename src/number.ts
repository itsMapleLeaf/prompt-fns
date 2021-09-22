import type { PromptOptions } from "./prompt"
import { basePrompt } from "./prompt"

export async function promptNumber(
  options: PromptOptions<number> | string,
): Promise<number> {
  return basePrompt("number", options)
}
