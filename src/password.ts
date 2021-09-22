import type { PromptOptions } from "./prompt"
import { basePrompt } from "./prompt"

export async function promptPassword(
  options: PromptOptions<string> | string,
): Promise<string> {
  return basePrompt("password", options)
}
