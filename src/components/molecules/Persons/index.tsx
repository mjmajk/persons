import PeopleSearch from 'components/molecules/PersonSearch'
import { PersonsList } from 'components/molecules/PersonsList'
import { SearchBar } from 'components/molecules/SearchBar'
import { useSearchValue } from 'store/search'

export const Persons = () => {
  const displaySearch = useSearchValue((state) => state.value.length >= 3)

  return (
    <>
      <SearchBar />
      {displaySearch ? <PeopleSearch /> : <PersonsList />}
    </>
  )
}
