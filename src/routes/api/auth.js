import {
  Authorizer,
  Biscuit,
  Check,
  Fact,
  KeyPair,
  Policy,
  PrivateKey,
  Rule,
} from "biscuit-wasm";

import { webcrypto } from "node:crypto";

globalThis.crypto = webcrypto;

export function bytesToHex(bytes) {
  return [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function prepareTerm(value) {
  if (value instanceof Date) {
    return { date: value.toISOString() };
  } else if (value instanceof Uint8Array) {
    return { bytes: bytesToHex(value) };
  } else if (Array.isArray(value)) {
    return value.map(prepareTerm);
  } else if (typeof value.toDatalogParameter === "function") {
    return value.toDatalogParameter();
  } else {
    return value;
  }
}

function tagged(builder) {
  return (strings, ...values) => {
    let code = "";
    for (let i = 0; i < strings.length; i++) {
      code += strings[i];
      if (i < values.length) {
        code += `{_param_${i}}`;
      }
    }

    const termParameters = Object.fromEntries(
      values.map((v, i) => {
        return [`_param_${i}`, prepareTerm(v)];
      }),
    );

    const isKeyParam = (v) => {
      return (
        (typeof v === "string" && v.startsWith("ed25519/")) ||
        v.toDatalogParameter
      );
    };

    const keyParameters = Object.fromEntries(
      values
        .map((v, i) => [i, v])
        .filter(([i, v]) => isKeyParam(v))
        .map(([i, v]) => {
          return [`_param_${i}`, prepareTerm(v)];
        }),
    );

    builder.addCodeWithParameters(code, termParameters, keyParameters);
    return builder;
  };
}

export function biscuit(strings, ...values) {
  const builder = Biscuit.builder();
  return tagged(builder)(strings, ...values);
}

export function block(strings, ...values) {
  const builder = Biscuit.block_builder();
  return tagged(builder)(strings, ...values);
}

export function authorizer(strings, ...values) {
  const builder = new Authorizer();
  return tagged(builder)(strings, ...values);
}

export function fact(strings, ...values) {
  let code = "";
  for (let i = 0; i < strings.length; i++) {
    code += strings[i];
    if (i < values.length) {
      code += `{_param_${i}}`;
    }
  }

  const params = new Map(
    values.map((v, i) => {
      return [`_param_${i}`, prepareTerm(v)];
    }),
  );

  const f = Fact.fromString(code);
  const unboundParams = f.unboundParameters();

  for (let p of unboundParams) {
    f.set(p, params.get(p));
  }

  return f;
}

export function rule(strings, ...values) {
  let code = "";
  for (let i = 0; i < strings.length; i++) {
    code += strings[i];
    if (i < values.length) {
      code += `{_param_${i}}`;
    }
  }

  const params = new Map(
    values.map((v, i) => {
      return [`_param_${i}`, prepareTerm(v)];
    }),
  );

  const r = Rule.fromString(code);
  const unboundParams = r.unboundParameters();
  const unboundScopeParams = r.unboundScopeParameters();

  for (let p of unboundParams) {
    r.set(p, params.get(p));
  }

  for (let p of unboundScopeParams) {
    r.setScope(p, params.get(p));
  }

  return r;
}

export function check(strings, ...values) {
  let code = "";
  for (let i = 0; i < strings.length; i++) {
    code += strings[i];
    if (i < values.length) {
      code += `{_param_${i}}`;
    }
  }

  const params = new Map(
    values.map((v, i) => {
      return [`_param_${i}`, prepareTerm(v)];
    }),
  );

  const c = Check.fromString(code);
  const unboundParams = c.unboundParameters();
  const unboundScopeParams = c.unboundScopeParameters();

  for (let p of unboundParams) {
    c.set(p, params.get(p));
  }

  for (let p of unboundScopeParams) {
    c.setScope(p, params.get(p));
  }

  return c;
}

export function policy(strings, ...values) {
  let code = "";
  for (let i = 0; i < strings.length; i++) {
    code += strings[i];
    if (i < values.length) {
      code += `{_param_${i}}`;
    }
  }

  const params = new Map(
    values.map((v, i) => {
      return [`_param_${i}`, prepareTerm(v)];
    }),
  );

  const pol = Policy.fromString(code);
  const unboundParams = pol.unboundParameters();
  const unboundScopeParams = pol.unboundScopeParameters();

  for (let p of unboundParams) {
    pol.set(p, params.get(p));
  }

  for (let p of unboundScopeParams) {
    pol.setScope(p, params.get(p));
  }

  return pol;
}

let pk = PrivateKey.fromString(
  "473b5189232f3f597b5c2f3f9b0d5e28b1ee4e7cce67ec6b7fbf5984157a6b97",
);
export let root = KeyPair.fromPrivateKey(pk);

export function token(userid, role) {
  const biscuitBuilder = biscuit`
    user(${userid});
    role(${role});
  `;

  console.log(root);
  return biscuitBuilder.build(root.getPrivateKey()).toBase64();
}

export function auth_all(token) {
  let parsedToken = Biscuit.fromBase64(token, root.getPublicKey());
  console.log(parsedToken);
  let auth = authorizer`
  allow if role("user");
`;

  auth.addToken(parsedToken);

  // let oo = new Promise((re, rej) => {let aa= auth.authorize(); console.log(aa)})
  auth.authorize();

  // let r1 = rule`role("user");`;
  console.log(
    "The token authority block & authorization context can be queried:",
  );
  // console.log(r1.toString());
  // let facts1 = auth.query(r1);
  // console.log(facts1.map((f) => f.toString()));
  // let r1 = rule`u($id) <- user($id)`;
  // console.log(
  //   "The token authority block & authorization context can be queried:",
  // );
  // console.log(r1.toString());
  // let facts1 = auth.query(r1);
  // console.log(facts1.map((f) => f.toString()));

  return "aa";
}

export function auth_public(token, key) {
  let parsedToken = Biscuit.fromBase64(token, key);
  console.log(parsedToken);
  let auth = authorizer`
  allow if role("user")
`;

  auth.addToken(parsedToken);

  try {
    let policy = auth.authorizeWithLimits({
      max_facts: 5,
      max_iterations: 0,
      max_time_micro: 100,
    });
    console.log(policy);
  } catch (err) {
    console.log(err);
  }

  return "aa";
}
