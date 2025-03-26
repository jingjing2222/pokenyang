import { useState, useEffect } from 'react'

export interface ILocation {
  latitude: number
  longitude: number
}

export const defaultLocation: ILocation = {
  latitude: 37.5665,
  longitude: 126.9780
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<ILocation>(defaultLocation)
  const [error, setError] = useState('')

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords

    setLocation({
      latitude,
      longitude,
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