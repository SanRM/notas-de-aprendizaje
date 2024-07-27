"use strict";(self.webpackChunknotas_personales=self.webpackChunknotas_personales||[]).push([[3189],{9359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(4848),a=r(8453);const s={title:"Data Access Object (DAO)"},i=void 0,o={id:"Patrones de dise\xf1o/Estructurales/Dao",title:"Data Access Object (DAO)",description:"Definici\xf3n",source:"@site/docs/Patrones de dise\xf1o/Estructurales/Dao.md",sourceDirName:"Patrones de dise\xf1o/Estructurales",slug:"/Patrones de dise\xf1o/Estructurales/Dao",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Estructurales/Dao",draft:!1,unlisted:!1,editUrl:"https://github.com/SanRM/notas-de-aprendizaje/edit/main/docs/Patrones de dise\xf1o/Estructurales/Dao.md",tags:[],version:"current",lastUpdatedBy:"SanRM",lastUpdatedAt:1722011095e3,frontMatter:{title:"Data Access Object (DAO)"},sidebar:"tutorialSidebar",previous:{title:"DAO vs DTO",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Estructurales/Dao vs Dto"},next:{title:"Data Transfer Object (DTO)",permalink:"/notas-de-aprendizaje/docs/Patrones de dise\xf1o/Estructurales/Dto"}},c={},l=[{value:"Definici\xf3n",id:"definici\xf3n",level:2},{value:"Componentes clave del patr\xf3n DAO:",id:"componentes-clave-del-patr\xf3n-dao",level:2},{value:"1. Interfaz DAO:",id:"1-interfaz-dao",level:3},{value:"2. Implementaci\xf3n DAO:",id:"2-implementaci\xf3n-dao",level:3},{value:"Ejemplo de implementaci\xf3n del patr\xf3n DAO:",id:"ejemplo-de-implementaci\xf3n-del-patr\xf3n-dao",level:2}];function d(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Card:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Card",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"definici\xf3n",children:"Definici\xf3n"}),"\n",(0,n.jsx)(t.p,{children:"El patr\xf3n DAO (Data Access Object) es un patr\xf3n de dise\xf1o que se utiliza en la programaci\xf3n orientada a objetos."}),"\n",(0,n.jsx)(t.p,{children:"El prop\xf3sito principal de este patr\xf3n es abstraer y encapsular todas las operaciones de acceso a los datos para un tipo de datos espec\xedfico, proporciona una interfaz que oculta los detalles de la implementaci\xf3n de la persistencia de datos en la base de datos."}),"\n",(0,n.jsx)(t.p,{children:"En el contexto de Java, cuando se utiliza el framework Spring Boot con JPA (Java Persistence API), no es necesario implementar manualmente el patr\xf3n DAO. Spring Boot proporciona una implementaci\xf3n autom\xe1tica de este patr\xf3n a trav\xe9s de sus repositorios, lo que simplifica el proceso de acceso a los datos y reduce la cantidad de c\xf3digo que los desarrolladores necesitan escribir."}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h2,{id:"componentes-clave-del-patr\xf3n-dao",children:"Componentes clave del patr\xf3n DAO:"}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:"1-interfaz-dao",children:"1. Interfaz DAO:"}),(0,n.jsx)(t.p,{children:"Esta interfaz define los m\xe9todos est\xe1ndar que se deben realizar en todos los objetos de datos, como insertar, actualizar, eliminar y encontrar."})]}),(0,n.jsxs)(r,{children:[(0,n.jsx)(t.h3,{id:"2-implementaci\xf3n-dao",children:"2. Implementaci\xf3n DAO:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Esta clase implementa la interfaz DAO y proporciona la l\xf3gica concreta para realizar las operaciones de la base de datos."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Esta clase debe manejar todas las llamadas a la base de datos y la manipulaci\xf3n de los datos."}),"\n"]}),"\n"]})]})]}),"\n",(0,n.jsxs)(r,{color:"darkBlue",children:[(0,n.jsx)(t.h2,{id:"ejemplo-de-implementaci\xf3n-del-patr\xf3n-dao",children:"Ejemplo de implementaci\xf3n del patr\xf3n DAO:"}),(0,n.jsx)(r,{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"title='Clase Dao abstracta:'",children:'import java.sql.*;\r\nimport java.util.ArrayList;\r\nimport java.util.List;\r\n\r\npublic abstract class Dao<T> {\r\n\r\n    //In this class, the methods that are common to all the DAOs are implemented.\r\n\r\n    protected Connection connection;\r\n\r\n    public Dao(Connection connection) {\r\n        this.connection = connection;\r\n    }\r\n\r\n    protected abstract T createEntityFromResultSet(ResultSet rs) throws SQLException;\r\n\r\n    protected abstract String getTableName();\r\n\r\n    protected abstract String getIdColumnName();\r\n\r\n    protected abstract String getInsertStatement();\r\n\r\n    protected abstract void setInsertStatementParameters(PreparedStatement ps, T entity) throws SQLException;\r\n\r\n    public T get(int id) {\r\n        try {\r\n            PreparedStatement ps = connection.prepareStatement("SELECT * FROM " + getTableName() + " WHERE " + getIdColumnName() + " = ?");\r\n            ps.setInt(1, id);\r\n            ResultSet rs = ps.executeQuery();\r\n            if (rs.next()) {\r\n                return createEntityFromResultSet(rs);\r\n            }\r\n        } catch (SQLException e) {\r\n            e.printStackTrace();\r\n        }\r\n        return null;\r\n    }\r\n\r\n    public List<T> getAll() {\r\n        List<T> entities = new ArrayList<>();\r\n        try {\r\n            Statement stmt = connection.createStatement();\r\n            ResultSet rs = stmt.executeQuery("SELECT * FROM " + getTableName());\r\n            while (rs.next()) {\r\n                T entity = createEntityFromResultSet(rs);\r\n                entities.add(entity);\r\n            }\r\n        } catch (SQLException e) {\r\n            e.printStackTrace();\r\n        }\r\n        return entities;\r\n    }\r\n\r\n    public void create(T entity) {\r\n        try {\r\n            PreparedStatement ps = connection.prepareStatement(getInsertStatement());\r\n            setInsertStatementParameters(ps, entity);\r\n            ps.executeUpdate();\r\n        } catch (SQLException e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n\r\n    public void update(int id, String attributeName, String newValue) {\r\n        try {\r\n            String query = "UPDATE " + getTableName() + " SET " + attributeName + " = ? WHERE " + getIdColumnName() + " = ?";\r\n            PreparedStatement ps = connection.prepareStatement(query);\r\n            ps.setString(1, newValue);\r\n            ps.setInt(2, id);\r\n            ps.executeUpdate();\r\n        } catch (SQLException e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n\r\n    public void delete(int id) {\r\n        try {\r\n            PreparedStatement ps = connection.prepareStatement("DELETE FROM " + getTableName() + " WHERE " + getIdColumnName() + " = ?");\r\n            ps.setInt(1, id);\r\n            ps.executeUpdate();\r\n        } catch (SQLException e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n}\n'})})}),(0,n.jsx)(r,{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",metastring:"title='Clase UsuarioDao que extiende de Dao:'",children:'package com.docudigitalsds.model.database.dao.daoImplementations.gestionUsuarioDao;\r\n\r\nimport com.docudigitalsds.model.database.dao.Dao;\r\nimport com.docudigitalsds.model.entities.gestionUsuario.Usuario;\r\n\r\nimport java.sql.*;\r\n\r\npublic class UsuarioDao extends Dao<Usuario> {\r\n\r\n    public UsuarioDao(Connection connection) {\r\n        super(connection);\r\n    }\r\n\r\n    //This method is exclusive to the UsuarioDao class for this reason it is not in the GenericDao class\r\n    public Usuario getUsuarioByEmailAndPassword(Connection connection, String email, String password) throws SQLException {\r\n        PreparedStatement ps = connection.prepareStatement("SELECT * FROM usuarios WHERE email = ? AND contrase\xf1a = ?");\r\n        ps.setString(1, email);\r\n        ps.setString(2, password);\r\n        ResultSet rs = ps.executeQuery();\r\n        if (rs.next()) {\r\n            return createEntityFromResultSet(rs);\r\n        }\r\n        return null;\r\n    }\r\n\r\n    @Override\r\n    protected String getTableName() {\r\n        return "usuarios";\r\n    }\r\n\r\n    @Override\r\n    protected String getInsertStatement() {\r\n        return "INSERT INTO usuarios (nombre, apellidoPaterno, apellidoMaterno, email, contrase\xf1a, fechaCreacion, fechaUltimaEdicion, idRoles) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";\r\n    }\r\n\r\n    @Override\r\n    protected void setInsertStatementParameters(PreparedStatement ps, Usuario usuario) throws SQLException {\r\n        ps.setString(1, usuario.getNombre());\r\n        ps.setString(2, usuario.getApellidoPaterno());\r\n        ps.setString(3, usuario.getApellidoMaterno());\r\n        ps.setString(4, usuario.getEmail());\r\n        ps.setString(5, usuario.getContrase\xf1a());\r\n        ps.setTimestamp(6, usuario.getFechaCreacion());\r\n        ps.setTimestamp(7, usuario.getFechaUltimaEdicion());\r\n        ps.setInt(8, usuario.getIdRoles());\r\n    }\r\n\r\n    @Override\r\n    protected String getIdColumnName() {\r\n        return "idUsuario";\r\n    }\r\n\r\n    @Override\r\n    protected Usuario createEntityFromResultSet(ResultSet rs) throws SQLException {\r\n        Usuario usuario = new Usuario();\r\n        usuario.setIdUsuario(rs.getInt("idUsuario"));\r\n        usuario.setNombre(rs.getString("nombre"));\r\n        usuario.setApellidoPaterno(rs.getString("apellidoPaterno"));\r\n        usuario.setApellidoMaterno(rs.getString("apellidoMaterno"));\r\n        usuario.setEmail(rs.getString("email"));\r\n        usuario.setContrase\xf1a(rs.getString("contrase\xf1a"));\r\n        usuario.setFechaCreacion(rs.getTimestamp("fechaCreacion"));\r\n        usuario.setFechaUltimaEdicion(rs.getTimestamp("fechaUltimaEdicion"));\r\n        usuario.setIdRoles(rs.getInt("idRoles"));\r\n        return usuario;\r\n    }   \r\n\r\n}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(6540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);