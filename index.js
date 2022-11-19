const trim = str => str.trim()

export const lowCaseFirst = string => {
  return trim(string[0].toLowerCase() + string.slice(1))
}
export const upperCaseFirst = string => {
  return trim(string[0].toUpperCase() + string.slice(1))
}
