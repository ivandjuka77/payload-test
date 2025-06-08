import type { File } from 'payload'

/**
 * Fetches a file from a URL and returns it in a format that Payload can use to create a media document.
 * It also intelligently determines the filename, extension, and mimetype.
 * @param url The URL of the file to fetch.
 * @returns A promise that resolves to a File object.
 */
export async function fetchFileByURL(url: string): Promise<File> {
  const res = await fetch(url, {
    method: 'GET',
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch file from ${url}, status: ${res.status}`)
  }

  const data = await res.arrayBuffer()

  let pathname
  try {
    pathname = new URL(url).pathname
  } catch (e) {
    const urlParts = url.split('?')[0]
    pathname = urlParts.substring(urlParts.lastIndexOf('/') + 1)
  }

  const baseFilename = pathname.substring(pathname.lastIndexOf('/') + 1) || 'file'

  let sanitizedBaseName = baseFilename.replace(/\.[^/.]+$/, '')
  sanitizedBaseName = sanitizedBaseName.replace(/[^a-zA-Z0-9_-]/g, '_')

  let extension = ''
  const nameParts = baseFilename.split('.')
  if (nameParts.length > 1) {
    const lastPart = nameParts.pop()
    if (lastPart && /^[a-zA-Z0-9]{2,5}$/.test(lastPart)) {
      extension = lastPart.toLowerCase()
    }
  }

  const contentType = res.headers.get('content-type')
  let mimeType = contentType || 'application/octet-stream'

  if (!extension && contentType && contentType.startsWith('image/')) {
    const guessedExtension = contentType.split('/')[1].split('+')[0]
    if (guessedExtension && !guessedExtension.includes('*')) {
      extension = guessedExtension.replace('jpeg', 'jpg')
    }
  }

  if (!extension) {
    extension = 'jpg'
    if (!mimeType.startsWith('image/')) mimeType = 'image/jpeg'
  } else if (!mimeType.startsWith('image/')) {
    mimeType = `image/${extension === 'jpg' ? 'jpeg' : extension}`
  }

  if (!sanitizedBaseName) {
    sanitizedBaseName = 'image'
  }

  const finalFileName = `${sanitizedBaseName}-${Date.now()}.${extension}`

  return {
    name: finalFileName,
    data: Buffer.from(data),
    mimetype: mimeType,
    size: data.byteLength,
  }
}
