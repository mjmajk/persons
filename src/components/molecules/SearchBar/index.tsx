import { Search } from '@styled-icons/boxicons-regular/Search'
import Flex from 'components/atoms/Flex'
import { NewPersonButton } from 'components/molecules/AddNewPersonButton'
import { debounce } from 'lodash'
import { useSearchValue } from 'store/search'
import { spacing } from 'theme'
import { Container, Input, SearchContainer } from './styled'

export const SearchBar = () => {
  const setSearchValue = useSearchValue((state) => state.setValue)

  const onChange = debounce((ev) => setSearchValue(ev.target.value), 200)

  return (
    <Container>
      <h2>Peoples list</h2>
      <Flex gap={spacing.s4}>
        <NewPersonButton />
        <SearchContainer>
          <Search />
          <Input onChange={onChange} type="text" placeholder="Filter by name" />
        </SearchContainer>
      </Flex>
    </Container>
  )
}
