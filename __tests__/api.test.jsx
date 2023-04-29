import '@testing-library/jest-dom';

import * as api from '../src/core/api.js';

import handler from '../src/core/api-handler.js';
jest.mock('../src/core/api-handler.js', () => jest.fn(() => 'TEST'));

describe('api code', () => {
  it('expects "getEventData" to send the correct values', () => {
    const data = api.getEventData();
    expect(data).toEqual('TEST');
    expect(handler).toHaveBeenCalledWith('event-data', '/api/data.json');
  });

  it('expects "getUserData" to send the correct values', () => {
    const data = api.getUserData();
    expect(data).toEqual('TEST');
    expect(handler).toHaveBeenCalledWith('user-data', '/api/data-user.json');
  });

  it('expects "getTaskTypes" to send the correct values', () => {
    const data = api.getTaskTypes();
    expect(data).toEqual('TEST');
    expect(handler).toHaveBeenCalledWith('task-types', '/api/task-types.json');
  });

  it('expects "getStatusTypes" to send the correct values', () => {
    const data = api.getStatusTypes();
    expect(data).toEqual('TEST');
    expect(handler).toHaveBeenCalledWith('status-types', '/api/status-types.json');
  });

  it('expects "getEventTypes" to send the correct values', () => {
    const data = api.getEventTypes();
    expect(data).toEqual('TEST');
    expect(handler).toHaveBeenCalledWith('event-types', '/api/event-types.json');
  });
});
