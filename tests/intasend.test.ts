import { describe, expect, test } from 'vitest';
import { IntaSend } from '../src/index';

describe('IntaSend Library', () => {
    const intaSend = new IntaSend({
        publishableKey: 'test-api-key',
        secretKey: 'test-api-key',
        live: false
    });


    test('should initialize with sandbox URL', () => {
        let sandboxUrl = 'https://sandbox.intasend.com/v1';
        expect(intaSend['baseUrl']).toBe(sandboxUrl);
    });
    
});
