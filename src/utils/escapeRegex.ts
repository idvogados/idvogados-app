const escapeRegexCharacters = (str: string) =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export { escapeRegexCharacters }
