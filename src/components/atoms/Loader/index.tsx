import { ClipLoader } from 'react-spinners'
import { LoaderSizeProps } from 'react-spinners/helpers/props'

const Loader = (props: LoaderSizeProps) => {
  return <ClipLoader {...props} />
}

export default Loader
