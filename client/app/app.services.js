(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'Authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name juridicaServices
 * @module
 * @description
 *
 * The `juridicaServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("juridicaServices", ['ngResource']);

/**
 * @ngdoc object
 * @name juridicaServices.Usuario
 * @header juridicaServices.Usuario
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Usuario` model.
 *
 * **Details**
 *
 * Usuario jurídico
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Usuario",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Usuarios/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Usuario.solicitudes.findById() instead.
        "prototype$__findById__solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.solicitudes.destroyById() instead.
        "prototype$__destroyById__solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.solicitudes.updateById() instead.
        "prototype$__updateById__solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.tipoDocumento() instead.
        "prototype$__get__tipoDocumento": {
          url: urlBase + "/Usuarios/:id/tipoDocumento",
          method: "GET"
        },

        // INTERNAL. Use Usuario.estadoCivil() instead.
        "prototype$__get__estadoCivil": {
          url: urlBase + "/Usuarios/:id/estadoCivil",
          method: "GET"
        },

        // INTERNAL. Use Usuario.pais() instead.
        "prototype$__get__pais": {
          url: urlBase + "/Usuarios/:id/pais",
          method: "GET"
        },

        // INTERNAL. Use Usuario.solicitudes() instead.
        "prototype$__get__solicitudes": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "GET"
        },

        // INTERNAL. Use Usuario.solicitudes.create() instead.
        "prototype$__create__solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "POST"
        },

        // INTERNAL. Use Usuario.solicitudes.destroyAll() instead.
        "prototype$__delete__solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.solicitudes.count() instead.
        "prototype$__count__solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#create
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#createMany
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#upsert
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Usuarios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#exists
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Usuarios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#findById
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Usuarios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#find
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Usuarios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#findOne
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Usuarios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#updateAll
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Usuarios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#deleteById
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Usuarios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#count
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Usuarios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#prototype$updateAttributes
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Usuarios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#createChangeStream
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Usuarios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Solicitud.usuario() instead.
        "::get::Solicitud::usuario": {
          url: urlBase + "/Solicitudes/:id/usuario",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#updateOrCreate
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#update
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#destroyById
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#removeById
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Usuario#modelName
    * @propertyOf juridicaServices.Usuario
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Usuario`.
    */
    R.modelName = "Usuario";

    /**
     * @ngdoc object
     * @name juridicaServices.Usuario.solicitudes
     * @header juridicaServices.Usuario.solicitudes
     * @object
     * @description
     *
     * The object `Usuario.solicitudes` groups methods
     * manipulating `Solicitud` instances related to `Usuario`.
     *
     * Call {@link juridicaServices.Usuario#solicitudes Usuario.solicitudes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#solicitudes
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Queries solicitudes of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitudes = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::get::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#count
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Counts solicitudes of Usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.solicitudes.count = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::count::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#create
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Creates a new instance in solicitudes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitudes.create = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::create::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#createMany
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Creates a new instance in solicitudes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitudes.createMany = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::createMany::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#destroyAll
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Deletes all solicitudes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.solicitudes.destroyAll = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::delete::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#destroyById
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Delete a related item by id for solicitudes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for solicitudes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.solicitudes.destroyById = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::destroyById::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#findById
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Find a related item by id for solicitudes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for solicitudes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitudes.findById = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::findById::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario.solicitudes#updateById
         * @methodOf juridicaServices.Usuario.solicitudes
         *
         * @description
         *
         * Update a related item by id for solicitudes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for solicitudes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitudes.updateById = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::updateById::Usuario::solicitudes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#tipoDocumento
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Fetches belongsTo relation tipoDocumento.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        R.tipoDocumento = function() {
          var TargetResource = $injector.get("TipoDocumento");
          var action = TargetResource["::get::Usuario::tipoDocumento"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#estadoCivil
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Fetches belongsTo relation estadoCivil.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        R.estadoCivil = function() {
          var TargetResource = $injector.get("EstadoCivil");
          var action = TargetResource["::get::Usuario::estadoCivil"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Usuario#pais
         * @methodOf juridicaServices.Usuario
         *
         * @description
         *
         * Fetches belongsTo relation pais.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        R.pais = function() {
          var TargetResource = $injector.get("Pais");
          var action = TargetResource["::get::Usuario::pais"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Solicitud
 * @header juridicaServices.Solicitud
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Solicitud` model.
 *
 * **Details**
 *
 * Solicitud de servicio
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Solicitud",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Solicitudes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Solicitud.usuario() instead.
        "prototype$__get__usuario": {
          url: urlBase + "/Solicitudes/:id/usuario",
          method: "GET"
        },

        // INTERNAL. Use Solicitud.servicio() instead.
        "prototype$__get__servicio": {
          url: urlBase + "/Solicitudes/:id/servicio",
          method: "GET"
        },

        // INTERNAL. Use Solicitud.motivo() instead.
        "prototype$__get__motivo": {
          url: urlBase + "/Solicitudes/:id/motivo",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#create
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Solicitudes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#createMany
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Solicitudes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#upsert
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Solicitudes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#exists
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Solicitudes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#findById
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Solicitudes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#find
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Solicitudes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#findOne
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Solicitudes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#updateAll
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Solicitudes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#deleteById
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Solicitudes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#count
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Solicitudes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#prototype$updateAttributes
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Solicitudes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#createChangeStream
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Solicitudes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Usuario.solicitudes.findById() instead.
        "::findById::Usuario::solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Usuario.solicitudes.destroyById() instead.
        "::destroyById::Usuario::solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.solicitudes.updateById() instead.
        "::updateById::Usuario::solicitudes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Usuarios/:id/solicitudes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Usuario.solicitudes() instead.
        "::get::Usuario::solicitudes": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "GET"
        },

        // INTERNAL. Use Usuario.solicitudes.create() instead.
        "::create::Usuario::solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "POST"
        },

        // INTERNAL. Use Usuario.solicitudes.createMany() instead.
        "::createMany::Usuario::solicitudes": {
          isArray: true,
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "POST"
        },

        // INTERNAL. Use Usuario.solicitudes.destroyAll() instead.
        "::delete::Usuario::solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes",
          method: "DELETE"
        },

        // INTERNAL. Use Usuario.solicitudes.count() instead.
        "::count::Usuario::solicitudes": {
          url: urlBase + "/Usuarios/:id/solicitudes/count",
          method: "GET"
        },

        // INTERNAL. Use Expediente.solicitud() instead.
        "::get::Expediente::solicitud": {
          url: urlBase + "/Expedientes/:id/solicitud",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#updateOrCreate
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#update
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#destroyById
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#removeById
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Solicitud#modelName
    * @propertyOf juridicaServices.Solicitud
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Solicitud`.
    */
    R.modelName = "Solicitud";


        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#usuario
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Fetches belongsTo relation usuario.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Usuario` object.)
         * </em>
         */
        R.usuario = function() {
          var TargetResource = $injector.get("Usuario");
          var action = TargetResource["::get::Solicitud::usuario"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#servicio
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Fetches belongsTo relation servicio.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R.servicio = function() {
          var TargetResource = $injector.get("Servicio");
          var action = TargetResource["::get::Solicitud::servicio"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Solicitud#motivo
         * @methodOf juridicaServices.Solicitud
         *
         * @description
         *
         * Fetches belongsTo relation motivo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        R.motivo = function() {
          var TargetResource = $injector.get("Motivo");
          var action = TargetResource["::get::Solicitud::motivo"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Cuenta
 * @header juridicaServices.Cuenta
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cuenta` model.
 *
 * **Details**
 *
 * Cuenta de autentificación
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cuenta",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cuentas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__findById__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuentas/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__destroyById__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuentas/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__updateById__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuentas/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cuenta.colaborador() instead.
        "prototype$__get__colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "GET"
        },

        // INTERNAL. Use Cuenta.colaborador.create() instead.
        "prototype$__create__colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.colaborador.update() instead.
        "prototype$__update__colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "PUT"
        },

        // INTERNAL. Use Cuenta.colaborador.destroy() instead.
        "prototype$__destroy__colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "DELETE"
        },

        // INTERNAL. Use Cuenta.practicante() instead.
        "prototype$__get__practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "GET"
        },

        // INTERNAL. Use Cuenta.practicante.create() instead.
        "prototype$__create__practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.practicante.update() instead.
        "prototype$__update__practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "PUT"
        },

        // INTERNAL. Use Cuenta.practicante.destroy() instead.
        "prototype$__destroy__practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "DELETE"
        },

        // INTERNAL. Use Cuenta.rol() instead.
        "prototype$__get__rol": {
          url: urlBase + "/Cuentas/:id/rol",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__get__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Queries accessTokens of Cuenta.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Cuentas/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__create__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Cuentas/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__delete__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Cuentas/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$__count__accessTokens
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Counts accessTokens of Cuenta.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Cuentas/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#create
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cuentas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#createMany
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Cuentas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#upsert
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cuentas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#exists
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Cuentas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#findById
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cuentas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#find
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cuentas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#findOne
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cuentas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#updateAll
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Cuentas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#deleteById
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Cuentas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#count
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Cuentas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#prototype$updateAttributes
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cuentas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#createChangeStream
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Cuentas/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#login
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Cuentas/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#logout
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Cuentas/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#confirm
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Cuentas/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#resetPassword
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Cuentas/reset",
          method: "POST"
        },

        // INTERNAL. Use Colaborador.cuenta() instead.
        "::get::Colaborador::cuenta": {
          url: urlBase + "/Colaboradores/:id/cuenta",
          method: "GET"
        },

        // INTERNAL. Use Practicante.cuenta() instead.
        "::get::Practicante::cuenta": {
          url: urlBase + "/Practicantes/:id/cuenta",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#getCurrent
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Cuentas" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#updateOrCreate
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#update
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#destroyById
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#removeById
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#getCachedCurrent
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link juridicaServices.Cuenta#login} or
         * {@link juridicaServices.Cuenta#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Cuenta instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#isAuthenticated
         * @methodOf juridicaServices.Cuenta
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#getCurrentId
         * @methodOf juridicaServices.Cuenta
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name juridicaServices.Cuenta#modelName
    * @propertyOf juridicaServices.Cuenta
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cuenta`.
    */
    R.modelName = "Cuenta";

    /**
     * @ngdoc object
     * @name juridicaServices.Cuenta.colaborador
     * @header juridicaServices.Cuenta.colaborador
     * @object
     * @description
     *
     * The object `Cuenta.colaborador` groups methods
     * manipulating `Colaborador` instances related to `Cuenta`.
     *
     * Call {@link juridicaServices.Cuenta#colaborador Cuenta.colaborador()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#colaborador
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Fetches hasOne relation colaborador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.colaborador = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::get::Cuenta::colaborador"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.colaborador#create
         * @methodOf juridicaServices.Cuenta.colaborador
         *
         * @description
         *
         * Creates a new instance in colaborador of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.colaborador.create = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::create::Cuenta::colaborador"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.colaborador#createMany
         * @methodOf juridicaServices.Cuenta.colaborador
         *
         * @description
         *
         * Creates a new instance in colaborador of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.colaborador.createMany = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::createMany::Cuenta::colaborador"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.colaborador#destroy
         * @methodOf juridicaServices.Cuenta.colaborador
         *
         * @description
         *
         * Deletes colaborador of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.colaborador.destroy = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::destroy::Cuenta::colaborador"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.colaborador#update
         * @methodOf juridicaServices.Cuenta.colaborador
         *
         * @description
         *
         * Update colaborador of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.colaborador.update = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::update::Cuenta::colaborador"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name juridicaServices.Cuenta.practicante
     * @header juridicaServices.Cuenta.practicante
     * @object
     * @description
     *
     * The object `Cuenta.practicante` groups methods
     * manipulating `Practicante` instances related to `Cuenta`.
     *
     * Call {@link juridicaServices.Cuenta#practicante Cuenta.practicante()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#practicante
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Fetches hasOne relation practicante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R.practicante = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::get::Cuenta::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.practicante#create
         * @methodOf juridicaServices.Cuenta.practicante
         *
         * @description
         *
         * Creates a new instance in practicante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R.practicante.create = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::create::Cuenta::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.practicante#createMany
         * @methodOf juridicaServices.Cuenta.practicante
         *
         * @description
         *
         * Creates a new instance in practicante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R.practicante.createMany = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::createMany::Cuenta::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.practicante#destroy
         * @methodOf juridicaServices.Cuenta.practicante
         *
         * @description
         *
         * Deletes practicante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.practicante.destroy = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::destroy::Cuenta::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta.practicante#update
         * @methodOf juridicaServices.Cuenta.practicante
         *
         * @description
         *
         * Update practicante of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R.practicante.update = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::update::Cuenta::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Cuenta#rol
         * @methodOf juridicaServices.Cuenta
         *
         * @description
         *
         * Fetches belongsTo relation rol.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        R.rol = function() {
          var TargetResource = $injector.get("Rol");
          var action = TargetResource["::get::Cuenta::rol"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Colaborador
 * @header juridicaServices.Colaborador
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Colaborador` model.
 *
 * **Details**
 *
 * Colaborador (Asesor o Coordinador)
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Colaborador",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Colaboradores/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Colaborador.cuenta() instead.
        "prototype$__get__cuenta": {
          url: urlBase + "/Colaboradores/:id/cuenta",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#create
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Colaboradores",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#createMany
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Colaboradores",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#upsert
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Colaboradores",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#exists
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Colaboradores/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#findById
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Colaboradores/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#find
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Colaboradores",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#findOne
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Colaboradores/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#updateAll
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Colaboradores/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#deleteById
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Colaboradores/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#count
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Colaboradores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#prototype$updateAttributes
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Colaboradores/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#createChangeStream
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Colaboradores/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.colaborador() instead.
        "::get::Cuenta::colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "GET"
        },

        // INTERNAL. Use Cuenta.colaborador.create() instead.
        "::create::Cuenta::colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.colaborador.createMany() instead.
        "::createMany::Cuenta::colaborador": {
          isArray: true,
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.colaborador.update() instead.
        "::update::Cuenta::colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "PUT"
        },

        // INTERNAL. Use Cuenta.colaborador.destroy() instead.
        "::destroy::Cuenta::colaborador": {
          url: urlBase + "/Cuentas/:id/colaborador",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.asesor() instead.
        "::get::Expediente::asesor": {
          url: urlBase + "/Expedientes/:id/asesor",
          method: "GET"
        },

        // INTERNAL. Use Expediente.coordinador() instead.
        "::get::Expediente::coordinador": {
          url: urlBase + "/Expedientes/:id/coordinador",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#updateOrCreate
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#update
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#destroyById
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#removeById
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Colaborador#modelName
    * @propertyOf juridicaServices.Colaborador
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Colaborador`.
    */
    R.modelName = "Colaborador";


        /**
         * @ngdoc method
         * @name juridicaServices.Colaborador#cuenta
         * @methodOf juridicaServices.Colaborador
         *
         * @description
         *
         * Fetches belongsTo relation cuenta.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        R.cuenta = function() {
          var TargetResource = $injector.get("Cuenta");
          var action = TargetResource["::get::Colaborador::cuenta"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Expediente
 * @header juridicaServices.Expediente
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Expediente` model.
 *
 * **Details**
 *
 * Expediente del caso
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Expediente",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Expedientes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Expediente.solicitud() instead.
        "prototype$__get__solicitud": {
          url: urlBase + "/Expedientes/:id/solicitud",
          method: "GET"
        },

        // INTERNAL. Use Expediente.asesor() instead.
        "prototype$__get__asesor": {
          url: urlBase + "/Expedientes/:id/asesor",
          method: "GET"
        },

        // INTERNAL. Use Expediente.coordinador() instead.
        "prototype$__get__coordinador": {
          url: urlBase + "/Expedientes/:id/coordinador",
          method: "GET"
        },

        // INTERNAL. Use Expediente.practicante() instead.
        "prototype$__get__practicante": {
          url: urlBase + "/Expedientes/:id/practicante",
          method: "GET"
        },

        // INTERNAL. Use Expediente.area() instead.
        "prototype$__get__area": {
          url: urlBase + "/Expedientes/:id/area",
          method: "GET"
        },

        // INTERNAL. Use Expediente.eventos.findById() instead.
        "prototype$__findById__eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Expediente.eventos.destroyById() instead.
        "prototype$__destroyById__eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.eventos.updateById() instead.
        "prototype$__updateById__eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Expediente.eventos() instead.
        "prototype$__get__eventos": {
          isArray: true,
          url: urlBase + "/Expedientes/:id/eventos",
          method: "GET"
        },

        // INTERNAL. Use Expediente.eventos.create() instead.
        "prototype$__create__eventos": {
          url: urlBase + "/Expedientes/:id/eventos",
          method: "POST"
        },

        // INTERNAL. Use Expediente.eventos.destroyAll() instead.
        "prototype$__delete__eventos": {
          url: urlBase + "/Expedientes/:id/eventos",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.eventos.count() instead.
        "prototype$__count__eventos": {
          url: urlBase + "/Expedientes/:id/eventos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#create
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Expedientes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#createMany
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Expedientes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#upsert
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Expedientes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#exists
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Expedientes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#findById
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Expedientes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#find
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Expedientes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#findOne
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Expedientes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#updateAll
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Expedientes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#deleteById
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Expedientes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#count
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Expedientes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#prototype$updateAttributes
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Expedientes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#createChangeStream
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Expedientes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Evento.expediente() instead.
        "::get::Evento::expediente": {
          url: urlBase + "/Eventos/:id/expediente",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#updateOrCreate
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#update
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#destroyById
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#removeById
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Expediente#modelName
    * @propertyOf juridicaServices.Expediente
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Expediente`.
    */
    R.modelName = "Expediente";


        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#solicitud
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Fetches belongsTo relation solicitud.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Solicitud` object.)
         * </em>
         */
        R.solicitud = function() {
          var TargetResource = $injector.get("Solicitud");
          var action = TargetResource["::get::Expediente::solicitud"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#asesor
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Fetches belongsTo relation asesor.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.asesor = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::get::Expediente::asesor"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#coordinador
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Fetches belongsTo relation coordinador.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Colaborador` object.)
         * </em>
         */
        R.coordinador = function() {
          var TargetResource = $injector.get("Colaborador");
          var action = TargetResource["::get::Expediente::coordinador"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#practicante
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Fetches belongsTo relation practicante.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R.practicante = function() {
          var TargetResource = $injector.get("Practicante");
          var action = TargetResource["::get::Expediente::practicante"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#area
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Fetches belongsTo relation area.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        R.area = function() {
          var TargetResource = $injector.get("Area");
          var action = TargetResource["::get::Expediente::area"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name juridicaServices.Expediente.eventos
     * @header juridicaServices.Expediente.eventos
     * @object
     * @description
     *
     * The object `Expediente.eventos` groups methods
     * manipulating `Evento` instances related to `Expediente`.
     *
     * Call {@link juridicaServices.Expediente#eventos Expediente.eventos()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name juridicaServices.Expediente#eventos
         * @methodOf juridicaServices.Expediente
         *
         * @description
         *
         * Queries eventos of Expediente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::get::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#count
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Counts eventos of Expediente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.eventos.count = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::count::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#create
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Creates a new instance in eventos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.create = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::create::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#createMany
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Creates a new instance in eventos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.createMany = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::createMany::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#destroyAll
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Deletes all eventos of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.eventos.destroyAll = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::delete::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#destroyById
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Delete a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.eventos.destroyById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::destroyById::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#findById
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Find a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.findById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::findById::Expediente::eventos"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Expediente.eventos#updateById
         * @methodOf juridicaServices.Expediente.eventos
         *
         * @description
         *
         * Update a related item by id for eventos.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for eventos
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R.eventos.updateById = function() {
          var TargetResource = $injector.get("Evento");
          var action = TargetResource["::updateById::Expediente::eventos"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Practicante
 * @header juridicaServices.Practicante
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Practicante` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Practicante",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Practicantes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Practicante.cuenta() instead.
        "prototype$__get__cuenta": {
          url: urlBase + "/Practicantes/:id/cuenta",
          method: "GET"
        },

        // INTERNAL. Use Practicante.tipoDocumento() instead.
        "prototype$__get__tipoDocumento": {
          url: urlBase + "/Practicantes/:id/tipoDocumento",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#create
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Practicantes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#createMany
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Practicantes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#upsert
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Practicantes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#exists
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Practicantes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#findById
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Practicantes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#find
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Practicantes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#findOne
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Practicantes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#updateAll
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Practicantes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#deleteById
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Practicantes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#count
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Practicantes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#prototype$updateAttributes
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Practicantes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#createChangeStream
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Practicantes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.practicante() instead.
        "::get::Cuenta::practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "GET"
        },

        // INTERNAL. Use Cuenta.practicante.create() instead.
        "::create::Cuenta::practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.practicante.createMany() instead.
        "::createMany::Cuenta::practicante": {
          isArray: true,
          url: urlBase + "/Cuentas/:id/practicante",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.practicante.update() instead.
        "::update::Cuenta::practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "PUT"
        },

        // INTERNAL. Use Cuenta.practicante.destroy() instead.
        "::destroy::Cuenta::practicante": {
          url: urlBase + "/Cuentas/:id/practicante",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.practicante() instead.
        "::get::Expediente::practicante": {
          url: urlBase + "/Expedientes/:id/practicante",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#updateOrCreate
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#update
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#destroyById
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#removeById
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Practicante` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Practicante#modelName
    * @propertyOf juridicaServices.Practicante
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Practicante`.
    */
    R.modelName = "Practicante";


        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#cuenta
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Fetches belongsTo relation cuenta.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cuenta` object.)
         * </em>
         */
        R.cuenta = function() {
          var TargetResource = $injector.get("Cuenta");
          var action = TargetResource["::get::Practicante::cuenta"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name juridicaServices.Practicante#tipoDocumento
         * @methodOf juridicaServices.Practicante
         *
         * @description
         *
         * Fetches belongsTo relation tipoDocumento.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        R.tipoDocumento = function() {
          var TargetResource = $injector.get("TipoDocumento");
          var action = TargetResource["::get::Practicante::tipoDocumento"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Servicio
 * @header juridicaServices.Servicio
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Servicio` model.
 *
 * **Details**
 *
 * Servicios jurídicos
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Servicio",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Servicios/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#create
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Servicios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#createMany
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Servicios",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#upsert
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Servicios",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#exists
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Servicios/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#findById
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Servicios/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#find
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Servicios",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#findOne
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Servicios/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#updateAll
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Servicios/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#deleteById
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Servicios/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#count
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Servicios/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#prototype$updateAttributes
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Servicios/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#createChangeStream
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Servicios/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Solicitud.servicio() instead.
        "::get::Solicitud::servicio": {
          url: urlBase + "/Solicitudes/:id/servicio",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#updateOrCreate
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#update
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#destroyById
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Servicio#removeById
         * @methodOf juridicaServices.Servicio
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Servicio` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Servicio#modelName
    * @propertyOf juridicaServices.Servicio
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Servicio`.
    */
    R.modelName = "Servicio";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Motivo
 * @header juridicaServices.Motivo
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Motivo` model.
 *
 * **Details**
 *
 * Motivos de rechazo
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Motivo",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Motivos/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#create
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Motivos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#createMany
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Motivos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#upsert
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Motivos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#exists
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Motivos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#findById
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Motivos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#find
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Motivos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#findOne
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Motivos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#updateAll
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Motivos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#deleteById
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Motivos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#count
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Motivos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#prototype$updateAttributes
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Motivos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#createChangeStream
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Motivos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Solicitud.motivo() instead.
        "::get::Solicitud::motivo": {
          url: urlBase + "/Solicitudes/:id/motivo",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#updateOrCreate
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#update
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#destroyById
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Motivo#removeById
         * @methodOf juridicaServices.Motivo
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Motivo` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Motivo#modelName
    * @propertyOf juridicaServices.Motivo
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Motivo`.
    */
    R.modelName = "Motivo";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Area
 * @header juridicaServices.Area
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Area` model.
 *
 * **Details**
 *
 * Área jurídica
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Area",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Areas/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Area#create
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Areas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#createMany
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Areas",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#upsert
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Areas",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#exists
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Areas/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#findById
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Areas/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#find
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Areas",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#findOne
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Areas/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#updateAll
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Areas/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#deleteById
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Areas/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#count
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Areas/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#prototype$updateAttributes
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Areas/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Area#createChangeStream
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Areas/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Expediente.area() instead.
        "::get::Expediente::area": {
          url: urlBase + "/Expedientes/:id/area",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Area#updateOrCreate
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Area#update
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Area#destroyById
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Area#removeById
         * @methodOf juridicaServices.Area
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Area` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Area#modelName
    * @propertyOf juridicaServices.Area
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Area`.
    */
    R.modelName = "Area";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.TipoDocumento
 * @header juridicaServices.TipoDocumento
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `TipoDocumento` model.
 *
 * **Details**
 *
 * Tipos de documento de identidad
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "TipoDocumento",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/TiposDocumento/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#create
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/TiposDocumento",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#createMany
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/TiposDocumento",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#upsert
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/TiposDocumento",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#exists
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/TiposDocumento/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#findById
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/TiposDocumento/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#find
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/TiposDocumento",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#findOne
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/TiposDocumento/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#updateAll
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/TiposDocumento/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#deleteById
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/TiposDocumento/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#count
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/TiposDocumento/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#prototype$updateAttributes
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/TiposDocumento/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#createChangeStream
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/TiposDocumento/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Usuario.tipoDocumento() instead.
        "::get::Usuario::tipoDocumento": {
          url: urlBase + "/Usuarios/:id/tipoDocumento",
          method: "GET"
        },

        // INTERNAL. Use Practicante.tipoDocumento() instead.
        "::get::Practicante::tipoDocumento": {
          url: urlBase + "/Practicantes/:id/tipoDocumento",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#updateOrCreate
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#update
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#destroyById
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.TipoDocumento#removeById
         * @methodOf juridicaServices.TipoDocumento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `TipoDocumento` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.TipoDocumento#modelName
    * @propertyOf juridicaServices.TipoDocumento
    * @description
    * The name of the model represented by this $resource,
    * i.e. `TipoDocumento`.
    */
    R.modelName = "TipoDocumento";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.EstadoCivil
 * @header juridicaServices.EstadoCivil
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EstadoCivil` model.
 *
 * **Details**
 *
 * Estado Civil
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "EstadoCivil",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/EstadosCiviles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#create
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/EstadosCiviles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#createMany
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/EstadosCiviles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#upsert
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/EstadosCiviles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#exists
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/EstadosCiviles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#findById
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/EstadosCiviles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#find
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/EstadosCiviles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#findOne
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/EstadosCiviles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#updateAll
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/EstadosCiviles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#deleteById
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/EstadosCiviles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#count
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/EstadosCiviles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#prototype$updateAttributes
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/EstadosCiviles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#createChangeStream
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/EstadosCiviles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Usuario.estadoCivil() instead.
        "::get::Usuario::estadoCivil": {
          url: urlBase + "/Usuarios/:id/estadoCivil",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#updateOrCreate
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#update
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#destroyById
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.EstadoCivil#removeById
         * @methodOf juridicaServices.EstadoCivil
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `EstadoCivil` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.EstadoCivil#modelName
    * @propertyOf juridicaServices.EstadoCivil
    * @description
    * The name of the model represented by this $resource,
    * i.e. `EstadoCivil`.
    */
    R.modelName = "EstadoCivil";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Pais
 * @header juridicaServices.Pais
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pais` model.
 *
 * **Details**
 *
 * Paises y nacionalidades
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pais",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Paises/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#create
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Paises",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#createMany
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Paises",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#upsert
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Paises",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#exists
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Paises/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#findById
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Paises/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#find
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Paises",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#findOne
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Paises/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#updateAll
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Paises/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#deleteById
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Paises/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#count
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Paises/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#prototype$updateAttributes
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Paises/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#createChangeStream
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Paises/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Usuario.pais() instead.
        "::get::Usuario::pais": {
          url: urlBase + "/Usuarios/:id/pais",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Pais#updateOrCreate
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#update
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#destroyById
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Pais#removeById
         * @methodOf juridicaServices.Pais
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Pais` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Pais#modelName
    * @propertyOf juridicaServices.Pais
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Pais`.
    */
    R.modelName = "Pais";


    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Evento
 * @header juridicaServices.Evento
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Evento` model.
 *
 * **Details**
 *
 * Evento programado
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Evento",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Eventos/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Evento.expediente() instead.
        "prototype$__get__expediente": {
          url: urlBase + "/Eventos/:id/expediente",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#create
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Eventos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#createMany
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Eventos",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#upsert
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Eventos",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#exists
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Eventos/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#findById
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Eventos/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#find
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Eventos",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#findOne
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Eventos/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#updateAll
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Eventos/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#deleteById
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Eventos/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#count
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Eventos/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#prototype$updateAttributes
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Eventos/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#createChangeStream
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Eventos/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Expediente.eventos.findById() instead.
        "::findById::Expediente::eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "GET"
        },

        // INTERNAL. Use Expediente.eventos.destroyById() instead.
        "::destroyById::Expediente::eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.eventos.updateById() instead.
        "::updateById::Expediente::eventos": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Expedientes/:id/eventos/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Expediente.eventos() instead.
        "::get::Expediente::eventos": {
          isArray: true,
          url: urlBase + "/Expedientes/:id/eventos",
          method: "GET"
        },

        // INTERNAL. Use Expediente.eventos.create() instead.
        "::create::Expediente::eventos": {
          url: urlBase + "/Expedientes/:id/eventos",
          method: "POST"
        },

        // INTERNAL. Use Expediente.eventos.createMany() instead.
        "::createMany::Expediente::eventos": {
          isArray: true,
          url: urlBase + "/Expedientes/:id/eventos",
          method: "POST"
        },

        // INTERNAL. Use Expediente.eventos.destroyAll() instead.
        "::delete::Expediente::eventos": {
          url: urlBase + "/Expedientes/:id/eventos",
          method: "DELETE"
        },

        // INTERNAL. Use Expediente.eventos.count() instead.
        "::count::Expediente::eventos": {
          url: urlBase + "/Expedientes/:id/eventos/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Evento#updateOrCreate
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#update
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#destroyById
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Evento#removeById
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Evento` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Evento#modelName
    * @propertyOf juridicaServices.Evento
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Evento`.
    */
    R.modelName = "Evento";


        /**
         * @ngdoc method
         * @name juridicaServices.Evento#expediente
         * @methodOf juridicaServices.Evento
         *
         * @description
         *
         * Fetches belongsTo relation expediente.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Expediente` object.)
         * </em>
         */
        R.expediente = function() {
          var TargetResource = $injector.get("Expediente");
          var action = TargetResource["::get::Evento::expediente"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name juridicaServices.Rol
 * @header juridicaServices.Rol
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rol` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rol",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Roles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#create
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#createMany
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#upsert
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Roles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#exists
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Roles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#findById
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Roles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#find
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Roles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#findOne
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Roles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#updateAll
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Roles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#deleteById
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Roles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#count
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Roles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#prototype$updateAttributes
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Roles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#createChangeStream
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Roles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Cuenta.rol() instead.
        "::get::Cuenta::rol": {
          url: urlBase + "/Cuentas/:id/rol",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name juridicaServices.Rol#updateOrCreate
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#update
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#destroyById
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name juridicaServices.Rol#removeById
         * @methodOf juridicaServices.Rol
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rol` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name juridicaServices.Rol#modelName
    * @propertyOf juridicaServices.Rol
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Rol`.
    */
    R.modelName = "Rol";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name juridicaServices.LoopBackResourceProvider
   * @header juridicaServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name juridicaServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf juridicaServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name juridicaServices.LoopBackResourceProvider#setUrlBase
     * @methodOf juridicaServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name juridicaServices.LoopBackResourceProvider#getUrlBase
     * @methodOf juridicaServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
