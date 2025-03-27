import { useState, useEffect } from 'react'

export interface ILocation {
  lat: number
  lng: number
}

export const defaultLocation: ILocation = {
  lat: 37.5665,
  lng: 126.9780
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<ILocation>(defaultLocation)
  const [error, setError] = useState('')

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude:lat, longitude:lng } = pos.coords

    setLocation({
      lat,
      lng,
    })
  }

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message)
  }

  useEffect(() => {
    const { geolocation } = navigator

    if (!geolocation) {
      setError('Geolocation is not supported.')
      return
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options)
  }, [options])

  return { location, error }
}