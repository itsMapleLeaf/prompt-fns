import inquirer, {
  CheckboxQuestionOptions,
  ConfirmQuestionOptions,
  InputQuestionOptions,
  ListQuestionOptions,
  NumberQuestionOptions,
  PasswordQuestionOptions,
  Separator,
} from "inquirer"

export async function promptInput(
  options?: Omit<InputQuestionOptions, "name" | "type">,
): Promise<string> {
  const result = await inquirer.prompt([
    { ...options, type: "input", name: "value" },
  ])
  return result.value
}

export async function promptPassword(
  options?: Omit<PasswordQuestionOptions, "name" | "type">,
): Promise<string> {
  const result = await inquirer.prompt([
    { ...options, type: "password", name: "value" },
  ])
  return result.value
}

export async function promptNumber(
  options?: Omit<NumberQuestionOptions, "name" | "type">,
): Promise<number> {
  const result = await inquirer.prompt([
    { ...options, type: "number", name: "value" },
  ])
  return result.value
}

export async function promptConfirm(
  options?: Omit<ConfirmQuestionOptions, "name" | "type">,
): Promise<boolean> {
  const result = await inquirer.prompt([
    { ...options, type: "confirm", name: "value" },
  ])
  return result.value
}

type PromptListOptions<Value> = Omit<
  ListQuestionOptions,
  "choices" | "name" | "type"
> & {
  choices: Array<
    { name: string; value: Value } | InstanceType<typeof Separator>
  >
}

export async function promptList<Value>(
  options: PromptListOptions<Value> | undefined,
): Promise<Value> {
  const result = await inquirer.prompt([
    { ...options, type: "list", name: "value" },
  ])
  return result.value
}

// TODO: use options object
export async function promptCheckboxList<Value>(
  message: string,
  choices: Array<
    | { name: string; value?: Value; disabled?: boolean }
    | InstanceType<typeof Separator>
  >,
  options:
    | Omit<CheckboxQuestionOptions, "message" | "choices" | "name" | "type">
    | undefined,
): Promise<Value[]> {
  const result = await inquirer.prompt([
    { ...options, message, choices, type: "checkbox", name: "value" },
  ])
  return result.value
}
