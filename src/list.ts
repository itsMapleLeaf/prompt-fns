import inquirer from "inquirer"
import type { PromptOptions } from "./prompt"
import { basePrompt } from "./prompt"

export type PromptListOptions<Result, Choice> = PromptOptions<Result> & {
  loop?: boolean
  choices?: Array<PromptListChoice<Choice>>
  pageSize?: number
}

export type PromptListChoice<Value> =
  | Value
  | { name?: string; value: Value }
  | typeof separator

export const separator = Symbol("separator")

export async function promptList<Value>(
  options: PromptListOptions<Value, Value>,
): Promise<Value> {
  return basePrompt("list", options, {
    choices: options.choices?.map((choice) => {
      if (choice === separator) return new inquirer.Separator()
      return choice
    }),
    loop: options.loop,
    pageSize: options.pageSize,
  })
}

export async function promptCheckboxList<Value>(
  options: PromptListOptions<Value[], Value>,
): Promise<Value[]> {
  return basePrompt("checkbox", options, {
    choices: options.choices?.map((choice) => {
      if (choice === separator) return new inquirer.Separator()
      return choice
    }),
    // @ts-expect-error
    loop: options.loop,
    pageSize: options.pageSize,
  })
}
