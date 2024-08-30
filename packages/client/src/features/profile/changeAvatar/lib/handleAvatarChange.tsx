export const handleAvatarChange = (
  newAvatarUrl: string,
  setAvatarUrl: (url: string) => void
) => {
  const fullAvatarUrl = `${newAvatarUrl}?${new Date().getTime()}`
  setAvatarUrl(fullAvatarUrl)
}
