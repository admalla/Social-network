import profileReducer, {setProfile, setStatus} from "./profile-reducer";

let state = { profile: null, status: '' }

it('new status should be add', () => {
  let action =setStatus('hello')
  let newState = profileReducer(state, action)
  expect(newState.status).toBe('hello')
})

it('profile should be null', () => {
  let action =setProfile(null)
  let newState = profileReducer(state, action)
  expect(newState.profile).toBe(null)
})