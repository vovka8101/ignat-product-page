type BreadcrumbsProps = {
  location: string
}

export const Breadcrumbs = ({ location }: BreadcrumbsProps) => {
  const locationParsed = location.split("/")
    .map(loc => (
      <li key={loc} className="location__item">
        <a href={`#${loc}`} className="location__link">{loc}</a>
      </li>
    ))

  return (
    <ul className="location">{locationParsed}</ul>
  )
}
