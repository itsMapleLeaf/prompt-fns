import type { PromptOptions } from "./prompt"
import { basePrompt } from "./prompt"

export async function promptInput(
  options: PromptOptions<string> | string,
): Promise<string> {
  return basePrompt("input", options)
}
