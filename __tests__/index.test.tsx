
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import HomeContent from '../components/home/HomeContent'



test('Contains correct information', () => {
  const {getByText} = render(<HomeContent />)
  expect(getByText('Login to CMS')).toBeInTheDocument()

    

})