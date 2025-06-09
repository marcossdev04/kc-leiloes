// utils/processContent.js
export const processContent = (content) => {
  if (!content) return ''

  let processedContent = content

  // Remove qualquer parâmetro 'url' que possa estar causando conflito
  processedContent = processedContent.replace(/\surl="[^"]*"/g, '')

  // Garante que src está correto
  processedContent = processedContent.replace(
    /src="http:\/\//g,
    'src="https://',
  )

  // Remove atributos que podem causar conflito com Next.js
  processedContent = processedContent.replace(
    /\s*(priority|placeholder|blurDataURL|fill|sizes)="[^"]*"/g,
    '',
  )

  // Adiciona atributos seguros para imagens
  processedContent = processedContent.replace(
    /<img([^>]*src="[^"]+")([^>]*)>/g,
    '<img$1$2 loading="lazy" crossorigin="anonymous" referrerpolicy="no-referrer">',
  )

  return processedContent
}
